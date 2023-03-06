import React from "react";

import Head from "@/components/heading";
function index() {
  return (
    <div className="dark:bg-black bg-gray-100 py-5 mb-8">
      <Head head="Our Services" />
      <div className="container  mx-auto lg:px-8 md:px-6 sm:px-4 px-2 gap-8 lg:columns-3 columns-auto ">
        <div className="service  mb-8 w-full bg-white rounded-xl pb-14 pt-6 px-7 hover:shadow-xl shadow-md transition-all ">
          <div className="icon transition-all">
            <img src="/service/web.png" className="w-20 h-20 transition-all" />
          </div>
          <div className="heading my-4 ">
            <h2 className="text-2xl font-bold pb-4 pt-2 uppercase text-orange-500">
              Web Development
            </h2>
            <p className="text-justify">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
        <div className="service  mb-8 w-full bg-white rounded-xl pb-14 pt-6 px-7 hover:shadow-xl shadow-md transition-all ">
          <div className="icon transition-all">
            <img src="/service/design.png" className="w-20 h-20 transition-all" />
          </div>
          <div className="heading my-4 ">
            <h2 className="text-2xl font-bold pb-4 pt-2 uppercase text-orange-500">
              Graphic Design
            </h2>
            <p className="text-justify">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
        <div className="service  mb-8 w-full bg-white rounded-xl pb-14 pt-6 px-7 hover:shadow-xl shadow-md transition-all ">
          <div className="icon transition-all">
            <img src="/service/data.png" className="w-20 h-20 transition-all" />
          </div>
          <div className="heading my-4 ">
            <h2 className="text-2xl font-bold pb-4 pt-2 uppercase text-orange-500">Data Entry</h2>
            <p className="text-justify">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $17 each.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;