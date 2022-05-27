import React from "react";

const ProductsRow = ({ product, index, setDeleteProduct}) => {
  const { name, image, price, quantity } = product;

  
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
          {<label onClick={()=>setDeleteProduct(product)} for="delete-confirm-modal" className="btn modal-button btn-xs btn-error" >Remove Product</label>}
        </td>
      </tr>
    </>
  );
};

export default ProductsRow;
