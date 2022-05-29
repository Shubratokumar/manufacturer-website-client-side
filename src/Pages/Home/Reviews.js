import React from "react";
import Review from "./Review";
import { useQuery } from "react-query";

const Reviews = () => {
  const { data: reviews } = useQuery("reviews", () =>
    fetch("https://glacial-bayou-51669.herokuapp.com/reviews", {
      method: "GET",
    }).then((res) => res.json())
  );
  return (
    <section className="bg-blue-50 p-12">
      <div className="text-center mb-20">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-6 text-center uppercase">
          Testimonials
        </h1>
        <div className="flex justify-center">
          <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {reviews?.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
