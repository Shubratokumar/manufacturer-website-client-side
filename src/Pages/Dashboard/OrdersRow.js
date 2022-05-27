import React from "react";

const OrdersRow = ({order, index, refetch}) => {
    const {name, email} = order;
    refetch()
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default OrdersRow;
