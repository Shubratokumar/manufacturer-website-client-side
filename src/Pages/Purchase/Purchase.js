import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useProduct from "./../../hooks/useProduct";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import Loading from "./../Shared/Loading";
import { toast } from "react-hot-toast";

const Purchase = () => {
  const [product, setProduct] = useProduct();
  const { name, image, price, description, minquantity } = product;
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const { register, reset, handleSubmit } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    const inputQuantity = data.quantity;
    const { quantity, ...rest } = product;

    if (inputQuantity >= minquantity && inputQuantity <= quantity) {
      const newQuantity = Number(quantity) - Number(inputQuantity);
      const newProduct = {
        ...rest,
        quantity: newQuantity,
        orderQuantity: quantity,
        userName: user?.displayName,
        userEmail: user?.email,
        phoneNumber: data.number,
      };
      const orders = {
        name,
        price,
        image,
        description,
        minquantity,
        orderQuantity: inputQuantity,
        userName: user?.displayName,
        userEmail: user?.email,
        phoneNumber: data.number,
      };
      setProduct(newProduct);
      const url = `https://glacial-bayou-51669.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((result) => {});
      // order
      fetch(`https://glacial-bayou-51669.herokuapp.com/order`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orders),
      })
        .then((res) => res.json())
        .then((results) => {
          if (results?.insertedId) {
            toast.success(
              `Your order for ${name} is confirmed. Total ${data.quantity} pieces.`
            );
            reset();
          }
        });
    } else if (inputQuantity < minquantity) {
      toast.error(`You can not order less than ${minquantity} pieces.`);
    } else if (inputQuantity > quantity) {
      toast.error("You can not order more than available quantity.");
    }
  };
  return (
    <div className="px-2 lg:px-20 bg-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center content-center py-10">
        <div className="card w-full bg-base-100 shadow-xl p-10">
          <figure className="px-5 pt-5">
            <img src={image} alt="product" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="text-xl italic">ID : {id}</p>
            <hr />
            <p className="text-sm">{description}</p>
            <hr />
            <p>
              Minimum Order :{" "}
              <span className="text-primary">{minquantity}</span>{" "}
            </p>
            <p>
              Available In Stock :{" "}
              <span className="text-primary">{product?.quantity}</span>{" "}
            </p>
            <p className="font-bold">
              Price : <span className="text-primary">$ {price}.00</span>{" "}
            </p>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl p-10">
          <div className="card-body">
            <h2 className=" text-2xl font-normal text-center my-2">
              Purchase Now{" "}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-md py-2">
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  disabled
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm ">
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  disabled
                  value={user?.email}
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm py-2">
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  placeholder="Your Address"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm">
                <input
                  {...register("number")}
                  type="number"
                  name="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm py-2">
                <input
                  {...register("quantity")}
                  type="number"
                  name="quantity"
                  placeholder={`Minimum order : ${minquantity}`}
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <input
                className="btn btn-primary w-full max-w-sm text-white text-base font-normal"
                type="submit"
                value="Order Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
