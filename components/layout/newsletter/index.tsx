import React from "react";

function subscribe() {
  return (
    <section className="pt-32 pb-32">
      <div className="container mx-auto px-4">
        <div className="row justify-center">
          <div className="col-lg-8 col-md-10">
            <div className="subscribe-area-text imgc text-center">
              <h5 className="uppercase text-lg font-medium text-gray-800">
                Join Our Newsletter
              </h5>
              <h2 className="mt-9 mb-12 font-bold text-5xl leading-10 py-10">
                Subscribe to get Updated with new offers
              </h2>

              <form action="#" className="relative lg:w-6/12 md:w-9/12 w-full mx-auto">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="pt-4 pb-4 pl-16 pr-6 w-full mb-5 h-16 rounded-lg border-none outline-none bg-teal-50"
                />
                <button className="subscribe-btn absolute text-xl font-medium px-9 py-2 right-2 top-2 ml-1">
                  Subscribe{" "}
                </button>
                <span className="absolute font-normal text-xl left-6 top-4 block mb-2 uppercase text-gray-400">
                  @
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default subscribe;
