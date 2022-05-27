import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// stripe promise
const stripePromise = loadStripe(
  "pk_test_51L1FBWBk9lrymgDjTrt9nvixf0uGu6IgC6rkkcubXkvqhbBCajektIsyKIhQ7dOwMiWXuc5kQwKuDlI6DeDTr7g400Fbr2eiqp"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://glacial-bayou-51669.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  const { name, price, orderQuantity, userName } = order;
  const totalAmount = Number(price) * Number(orderQuantity);
  return (
    <div className="p-4 bg-base-200">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 ">
        <div className="card-body">
          <p className="text-success text-2xl font-bold">Hello, {userName}</p>
          <h2 className="card-title">Please make payment for {name}.</h2>
          <p>
            Your Order Quantity :{" "}
            <span className="text-orange-700">{orderQuantity}</span>
          </p>
          <p>
            Each {name} : $ <span className="text-orange-700">{price}</span>
          </p>
          <p>
            Total Pay : $ <span className="text-orange-700">{totalAmount}</span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
