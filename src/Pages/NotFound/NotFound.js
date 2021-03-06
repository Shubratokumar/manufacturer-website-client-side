import React from "react";
import error from "../../../src/Assets/Images/404.jpg";

const NotFound = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse text-neutral-content">
        <img
          src={error}
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          alt="workshop"
        />
        <div className="text-center">
          <p className="text-xl uppercase">
            {" "}
            Opps! <span className="text-primary "></span>
          </p>
          <h1 className="text-5xl font-bold">
            404, <span className="text-primary ">Page Not Found.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
