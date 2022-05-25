import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useProduct from "./../../hooks/useProduct";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../Shared/Loading';
import { toast } from 'react-hot-toast';

const Purchase = () => {
  const [product, setProduct] = useProduct();
  const { name, image, price, description, minquantity } = product;
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  if(loading){
    return <Loading></Loading>
  }
  const onSubmit = data =>{
    const inputQuantity = data.quantity;
    const {quantity, ...rest} = product;

    if(inputQuantity >= minquantity && inputQuantity <= quantity ){
      const newQuantity = Number(quantity) - Number(inputQuantity);
      const newProduct = {
        ...rest, 
        quantity: newQuantity,
        orderQuantity : quantity,
        userName : user?.displayName,
        userEmail : user?.email,
        phoneNumber : data.number,
      };
      const orders = {
        name,
        price,
        image,
        description,
        minquantity,
        orderQuantity : inputQuantity,
        userName : user?.displayName,
        userEmail : user?.email,
        phoneNumber : data.number,

      } 
      setProduct(newProduct);
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((result) => {
        });
      // order 
      fetch(`http://localhost:5000/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((results) => {
          if(results?.insertedId){
            toast.success(`Your order for ${name} is confirmed. Total ${data.quantity} pieces.`)
          }
        });

    } else if( inputQuantity < minquantity){
      toast.error(`You can not order less than ${minquantity} pieces.`)
    } else if( inputQuantity > quantity){
      toast.error("You can not order more than available quantity.")
    }

}
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 py-20">
        <div class="hero-content flex-col lg:flex-row">
        <div class="card max-w-md lg:max-w-lg  bg-base-100 shadow-xl">
          <figure class="px-5 pt-5">
            <img src={image} alt="product" class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p className="text-xl italic">ID : {id}</p>
            <hr />
              <p className="text-sm">{description}</p>
            <hr />
            <p>Minimum Order : <span className="text-primary">{minquantity}</span> </p>
            <p>Available In Stock : <span className="text-primary">{product?.quantity}</span> </p>
            <p className="font-bold">Price : <span className="text-primary">$ {price}.00</span> </p>
          </div>
        </div>
          
          <div class="card  max-w-md lg:max-w-lg shadow-2xl bg-base-100 ">
          <div class="card-body">
            <h2 className=" text-2xl font-normal text-center my-2">Purchase Now </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-md py-2">
              <input
                {...register("name")}
                name="name"
                type="text"
                disabled
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs ">
              <input
                {...register("email")}
                name="email"
                type="email"
                disabled
                value={user?.email}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs py-2">
              <input
                {...register("address")}
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                {...register("number")}
                type="number"
                name="number"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs py-2">
              <input
                {...register("quantity")}
                type="number"
                name="quantity"
                placeholder={`Minimum order : ${minquantity}`}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input className="btn btn-primary w-full text-white text-base font-normal" type="submit" value="Order Now" />
          </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
