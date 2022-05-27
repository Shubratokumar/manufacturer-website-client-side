import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "./../Shared/Loading";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(" ");
  const [transactionId, setTransactionId] = useState(" ");
  const [cardSuccess, setCardSuccess] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(" ");

  const { _id, price, userName, userEmail } = order;

  useEffect(() => {
    fetch(`https://glacial-bayou-51669.herokuapp.com/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error?.message);
      console.log("[error]", error);
      return;
    } else {
      setCardError(" ");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setCardSuccess(" ");
    setLoading(true);

    //   confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setLoading(false);
    } else {
      setCardError(" ");
      setTransactionId(paymentIntent?.id);
      setCardSuccess("Congrats! Payment done.");

      //   update order
      const payment = {
        order: _id,
        transactionId: paymentIntent?.id,
      };
      const url = `https://glacial-bayou-51669.herokuapp.com/order/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-xs btn-success my-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {cardError && <p className="text-error">{cardError}</p>}
      {cardSuccess && (
        <div>
          <p className="text-success">{cardSuccess}</p>
          <p className="text-success"> {transactionId}</p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
