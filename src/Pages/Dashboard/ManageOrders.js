import React from 'react';
import OrdersRow from './OrdersRow';
import Loading from './../Shared/Loading';
import { useQuery } from 'react-query';

const ManageOrders = () => {
    const {data : orders , refetch, isLoading } = useQuery("orders", () =>
    fetch("http://localhost:5000/orders", {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
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
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrdersRow
              order={order}
              key={order._id}
              index={index}
              refetch={refetch}
              >
              </OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageOrders;