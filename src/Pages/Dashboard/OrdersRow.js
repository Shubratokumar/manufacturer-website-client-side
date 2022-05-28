import React from "react";
import { toast } from 'react-hot-toast';

const OrdersRow = ({order, index, refetch, setDeleteOrder}) => {
    const {_id, name, userEmail, orderQuantity, price, phoneNumber, userName, paid, shipped} = order;

    const handleUpdateOrder = id =>{
      //   update order status
      const shipped = {
        shippedOrderId: _id,
      };
      const url = `http://localhost:5000/order/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(shipped),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data?.modifiedCount > 0){
            toast.success(`${name} is shipped.`)
            refetch()
          }
        });
    }
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
          paid && !shipped &&( <button onClick={()=>handleUpdateOrder(_id)} className="btn btn-xs btn-warning">Pending</button>)
        }
        {
          paid && shipped &&( <button className="btn btn-xs btn-success">shipped</button>)
        }
      </td>
      <td>
      {        
          <label onClick={()=>setDeleteOrder(order)} for="delete-order-modal" className="btn btn-xs btn-error" disabled={paid && !shipped}>
            Cancel Order
          </label>
      }
      </td>
    </tr>
  );
};

export default OrdersRow;
