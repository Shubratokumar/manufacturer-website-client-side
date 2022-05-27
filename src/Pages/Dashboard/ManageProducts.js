import React, { useState } from "react";
import ProductsRow from './ProductsRow';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';
import DeleteProductModal from "./DeleteProductModal";

const ManageProducts = () => {
    const [ deleteProduct, setDeleteProduct ] = useState(null);
    const {data : products, refetch, isLoading} = useQuery("products", ()=> 
    fetch('http://localhost:5000/products').then(res => res.json())
    );
    if(isLoading){
        return <Loading></Loading>
    }
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
              <th>Avatar</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <ProductsRow
              product={product}
              key={product._id}
              index={index}
              refetch={refetch}
              setDeleteProduct={setDeleteProduct}
              >
              </ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteProduct && <DeleteProductModal
        deleteProduct={deleteProduct}
        refetch={refetch}
        setDeleteProduct={setDeleteProduct}
        ></DeleteProductModal>
      }
    </div>
  );
};

export default ManageProducts;
