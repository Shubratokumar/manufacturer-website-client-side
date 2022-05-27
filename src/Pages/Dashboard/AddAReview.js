import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { toast } from 'react-hot-toast';

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
      const maxRating = 5;
      const minRating = -5;
      const inputRating = data?.rating;
      const review = {
        name : data.name,
        reviews : data.reviews,
        rating : inputRating ,
      };

    if(inputRating >= minRating && inputRating <= maxRating ){
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((results) => {
              if(results?.insertedId){
                toast.success(`Thanks for giving reviews.`);
                reset();
              }
            });
    } else if(inputRating <= minRating){
        toast.error("You cannot give bellow -5 rating out of 5.")
    } else if(inputRating >= maxRating){
        toast.error("You cannot give more than 5 rating out of 5.")
    }
    
    
  };
  return (
    <div class="h-screen p-3">
      <div class="card w-96  shadow-2xl bg-base-200 px-5">
        <div class="card-body">
          <h2 className="text-center text-2xl font-normal text-primary">
            Add A Review
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Name</span>
              </label>
              <input
                {...register("name")}
                value={user?.displayName}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Email</span>
              </label>
              <input
                {...register("email")}
                value={user?.email}
                type="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Write a review</span>
              </label>
              <textarea
                {...register("reviews", {
                  required: {
                    value: true,
                    message: "Product review is required ",
                  },
                })}
                type="text"
                placeholder="Write products review here"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.review?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="text-sm">Give Ratings</span>
              </label>
              <input
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Product ratings is required ",
                  },
                })}
                type="number"
                placeholder="Give a ratings out of 5"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full max-w-xs text-white text-base font-normal"
              type="submit"
              value="Add a review"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
