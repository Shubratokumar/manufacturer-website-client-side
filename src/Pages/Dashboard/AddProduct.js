import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "b983ae1c3629cfc642edcb9df25e58a8";

  const onSubmit = async (data) => {
    const image = data?.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.success) {
          const img = result?.data?.url;
          const product = {
            name: data?.name,
            description: data?.description,
            price: data?.price,
            quantity: data?.quantity,
            minquantity: data?.minquantity,
            image: img,
          };
          //   add new product to database
          fetch("https://glacial-bayou-51669.herokuapp.com/product", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((added) => {
              if (added?.insertedId) {
                toast.success("Successfully added new product.");
                reset();
              } else {
                toast.error("Adding product failed !!");
              }
            });
        }
      });
  };

  return (
    <div className="min-h-screen p-4 ">
      <div className="card w-96 bg-base-200 shadow-xl ">
        <div className="card-body items-center">
          <h2 className="text-2xl">Add a New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Product Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name is required ",
                  },
                })}
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Product description</span>
              </label>
              <input
                {...register("description", {
                  required: {
                    value: true,
                    message: "Product description is required ",
                  },
                })}
                type="text"
                placeholder="Product description"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Product Price</span>
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "Product price is required ",
                  },
                })}
                type="number"
                placeholder="Product price"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Product Quantity</span>
              </label>
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Product quantity is required ",
                  },
                })}
                type="number"
                placeholder="Product quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Min Order Quantity </span>
              </label>
              <input
                {...register("minquantity", {
                  required: {
                    value: true,
                    message: "Product min order quantity is required ",
                  },
                })}
                type="number"
                placeholder="Product quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Product Image</span>
              </label>
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required ",
                  },
                })}
                type="file"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full max-w-xs text-white text-base font-normal"
              type="submit"
              value="Add New Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
