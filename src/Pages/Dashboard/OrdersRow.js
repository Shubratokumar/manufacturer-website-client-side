import React from "react";

const OrdersRow = ({order, index, refetch}) => {
    const {name, userEmail, orderQuantity, price, phoneNumber, userName} = order;
    refetch()
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{orderQuantity}</td>
      <td>{price}</td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phoneNumber}</td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default OrdersRow;
