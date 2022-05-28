import React from "react";

const Review = ({ review }) => {
  const { name, reviews, rating } = review;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-20">
      <div className="card-body items-center text-center">
        <p className="italic">"{reviews}" </p>
        <span className="inline-block h-1 w-10 rounded bg-secondary m-5"></span>
        <h2 className="card-title uppercase ">{name}</h2>
        <p>Ratings : {rating}/5</p>
      </div>
    </div>
  );
};

export default Review;
