import React from "react";
import { IoIosPeople } from "react-icons/io";
import { RiMoneyPoundBoxLine } from "react-icons/ri";
import { FiFlag } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

const BusinessSummery = () => {
  return (
    <section className="px-5 lg:px-20 pt-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-6 text-center uppercase">
            Why Choose Us
          </h1>
          <div className="flex justify-center">
            <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg ">
              <IoIosPeople className="text-primary w-12 h-12 mb-3 inline-block"></IoIosPeople>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K+
              </h2>
              <p className="leading-relaxed">Happy Customers</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <RiMoneyPoundBoxLine className="text-primary w-12 h-12 mb-3 inline-block"></RiMoneyPoundBoxLine>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3M+
              </h2>
              <p className="leading-relaxed">Annual Revenue</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiFlag className="text-primary w-12 h-12 mb-3 inline-block"></FiFlag>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74+
              </h2>
              <p className="leading-relaxed">Supply Countries</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <BiSupport className="text-primary w-12 h-12 mb-3 inline-block"></BiSupport>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                24/7
              </h2>
              <p className="leading-relaxed">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;
