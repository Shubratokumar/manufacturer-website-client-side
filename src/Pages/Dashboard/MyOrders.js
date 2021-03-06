import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const { data: orders, isLoading } = useQuery("order", () =>
    fetch(
      `https://glacial-bayou-51669.herokuapp.com/order?userEmail=${user?.email}`,
      {
        headers: {
          method: "GET",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        toast.error(`${res.statusText}`);
        localStorage.removeItem("accessToken");
        signOut(auth);
      }
      return res.json();
    })
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mb-4">
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <>
                <tr key={order._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{order.name}</td>
                  <td>$ {order.price}</td>
                  <td>{order.orderQuantity}</td>
                  <td>
                    {order.price && !order.paid && (
                      <Link
                        to={`/dashboard/payment/${order._id}`}
                        className="btn btn-xs btn-success"
                      >
                        Pay
                      </Link>
                    )}
                    {order.paid && !order.shipped && (
                      <div>
                        <p>
                          <span className="btn btn-xs btn-warning">
                            Pending
                          </span>
                        </p>
                        <p>
                          {" "}
                          Transaction id :
                          <span className="text-success">
                            {order.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                    {
                         order.paid && order.shipped &&( <button className="btn btn-xs btn-success">shipped</button>)
                     }
                </td>
                  <td>
                    {
                      <button disabled={order.paid && order.shipped} className="btn btn-xs btn-error">
                        Cancel Order
                      </button>
                    }
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
