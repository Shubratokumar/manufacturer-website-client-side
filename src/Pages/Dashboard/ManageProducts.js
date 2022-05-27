import React from "react";
import useProducts from "./../../hooks/useProducts";

const ManageProducts = () => {
  const [products] = useProducts();
  return (
    <div className="mb-3">
      <h3 className="text-2xl text-center font-semibold text-secondary mb-2">
        Mange Products
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <>
                <tr key={product._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{product.name}</td>
                  <td>$ {product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {
                      <button className="btn btn-xs btn-error">
                        Remove Product
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

export default ManageProducts;
