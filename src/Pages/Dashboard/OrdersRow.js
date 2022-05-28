import React from "react";

const OrdersRow = ({order, index, refetch}) => {
    const {name, userEmail, orderQuantity, price, phoneNumber, userName, paid, shipped} = order;
    refetch()
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{orderQuantity}</td>
      <td>$ {price}</td>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phoneNumber}</td>
      <td>
        {
          !paid && !shipped &&( <button className="btn btn-xs btn-warning">Unpaid</button>)
        }
        {
          paid && !shipped &&( <button className="btn btn-xs btn-success">Paid</button>)
        }
      </td>
      <td>
        {
          paid && !shipped &&( <button className="btn btn-xs btn-warning">Pending</button>)
        }
        {
          paid && shipped &&( <button className="btn btn-xs btn-success">shipped</button>)
        }
      </td>
      <td>
      {        
          <button className="btn btn-xs btn-error">
            Cancel Order
          </button>
      }
      </td>
    </tr>
  );
};

export default OrdersRow;
