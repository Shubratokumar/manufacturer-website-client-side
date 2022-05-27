import React from "react";
import { toast } from 'react-hot-toast';

const ProductsRow = ({ product, index , refetch}) => {
  const { _id,  name, image, price, quantity } = product;

  const handleDelete = id =>{
      fetch(`http://localhost:5000/products/${id}`, {
          method : "DELETE"
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          if(data?.deletedCount){
              toast.success(`Delete ${name} successfully.`)
              refetch()
          } else{
              toast.error("Failed to delete.")
          }
      })

  }
  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src={image} alt={name} />
            </div>
          </div>
        </td>
        <td>$ {price}</td>
        <td>{quantity}</td>
        <td>
          {<button onClick={()=>handleDelete(_id)} className="btn btn-xs btn-error">Remove Product</button>}
        </td>
      </tr>
    </>
  );
};

export default ProductsRow;
