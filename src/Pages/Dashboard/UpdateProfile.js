import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const UpdateProfile = ({ profileUser, refetch }) => {
  const { email, name } = profileUser;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const updatedUser = {
      location: data.location,
      phoneNumber: data.phoneNumber,
      linkedIn: data.linkedIn,
    };
    //   update user info
    fetch(`https://glacial-bayou-51669.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.matchedCount > 0) {
          toast.success("Profile Updated Successfully.");
          reset();
          refetch();
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl uppercase text-secondary text-center">
        Update Profile
      </h2>
      <div class="flex mt-6 justify-center mb-4">
        <div class="w-60 h-1 rounded-full bg-primary inline-flex"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="text-sm">Name</span>
          </label>
          <input
            {...register("name")}
            value={name}
            type="text"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="text-sm">Email</span>
          </label>
          <input
            {...register("email")}
            value={email}
            type="email"
            className="input input-bordered w-full max-w-sm"
          />
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="text-sm">Location/ Address</span>
          </label>
          <textarea
            {...register("location", {
              required: {
                value: true,
                message: "Location is required ",
              },
            })}
            type="text"
            placeholder="Write Your Address here"
            className="input input-bordered w-full max-w-sm"
          />
          <label className="label">
            {errors.review?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.review.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="text-sm">Phone Number</span>
          </label>
          <input
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Product ratings is required ",
              },
            })}
            type="number"
            placeholder="Your contact number"
            className="input input-bordered w-full max-w-sm"
          />
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full max-w-sm">
          <label className="label">
            <span className="text-sm">LinkedIn Profile Link</span>
          </label>
          <input
            {...register("linkedIn", {
              required: {
                value: true,
                message: "LinkedIn Profile Link is required ",
              },
            })}
            type="text"
            placeholder="Your LinkedIn Profile Link"
            className="input input-bordered w-full max-w-sm"
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
          className="btn w-full max-w-sm text-white text-base font-normal"
          type="submit"
          value="Update profile"
        />
      </form>
    </div>
  );
};

export default UpdateProfile;
