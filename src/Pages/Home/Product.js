import React from "react";

const Product = ({product}) => {
    const {name, image, price, description, minquantity, quantity } = product;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
      <figure className="px-10 pt-10">
        <img src={image} alt="service" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="text-left">
            <p>{description.slice(0,30)}</p>
            <p>Available In Stock : <span className="text-primary">{quantity}</span> </p>
            <p>Minimum Order : <span className="text-primary">{minquantity}</span> </p>
        </div>
        <div className="flex">
            <span class="title-font font-medium text-2xl text-gray-900">${price}.00</span>
            <button class="flex ml-auto btn btn-primary hover:bg-neutral">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
