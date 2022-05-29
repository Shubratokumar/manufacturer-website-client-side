import React from "react";
import Product from "./Product";
import useProducts from "./../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <section className="bg-blue-50 py-20 p-12">
      <div className="text-center ">
        <div>
          <h2 className="text-3xl font-medium title-font text-gray-900 mb-6 text-center uppercase">Featured Products</h2>
          <div className="flex  justify-center">
            <div className="w-96 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {products
            ?.slice(-6)
            .reverse()
            .map((product) => (
              <Product product={product} key={product._id}></Product>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
