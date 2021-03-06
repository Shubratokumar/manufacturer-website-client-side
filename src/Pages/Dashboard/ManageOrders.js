import React, { useState } from "react";
import OrdersRow from "./OrdersRow";
import Loading from "./../Shared/Loading";
import { useQuery } from "react-query";
import CancelOrderModal from "./CancelOrderModal";

const ManageOrders = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const {
    data: orders,
    refetch,
    isLoading,
  } = useQuery("orders", () =>
    fetch("https://glacial-bayou-51669.herokuapp.com/orders", {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  };

  
  return (
    <div className="mb-3">
      <h3 className="text-2xl text-center font-semibold text-secondary mb-2">
        Manage Products
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price (each)</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Payment Status</th>
              <th>Product Status</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrdersRow
                order={order}
                key={order._id}
                index={index}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {
       deleteOrder && <CancelOrderModal 
        deleteOrder={deleteOrder}
        refetch={refetch}
        setDeleteOrder={setDeleteOrder}
        ></CancelOrderModal>
      }
    </div>
  );
};

export default ManageOrders;
