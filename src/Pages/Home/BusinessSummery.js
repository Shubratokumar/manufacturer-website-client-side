import React from "react";
import { IoIosPeople } from 'react-icons/io';
import { RiMoneyPoundBoxLine } from 'react-icons/ri';
import { FiFlag } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';

const BusinessSummery = () => {
  return (
    <section className="px-5 lg:px-20 my-20">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-5xl font-bold title-font mb-4 text-gray-900">
            Why Choose Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg ">
              	<IoIosPeople className="text-primary w-12 h-12 mb-3 inline-block"></IoIosPeople>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                2.7K+
              </h2>
              <p class="leading-relaxed">Happy Customers</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <RiMoneyPoundBoxLine className="text-primary w-12 h-12 mb-3 inline-block"></RiMoneyPoundBoxLine>
              <h2 class="title-font font-medium text-3xl text-gray-900">
                1.3M+
              </h2>
              <p class="leading-relaxed">Annual Revenue</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiFlag className="text-primary w-12 h-12 mb-3 inline-block"></FiFlag>
              <h2 class="title-font font-medium text-3xl text-gray-900">74+</h2>
              <p class="leading-relaxed">Supply Countries</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <BiSupport className="text-primary w-12 h-12 mb-3 inline-block"></BiSupport>
              <h2 class="title-font font-medium text-3xl text-gray-900">24/7</h2>
              <p class="leading-relaxed">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;
