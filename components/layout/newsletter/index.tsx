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
              <h2 className="lg:mt-9 mt-0 mb-12 font-bold md:text-5xl text-3xl leading-10 py-5">
                Subscribe to get Updated with new offers
              </h2>

              <form action="#" className="relative lg:w-6/12 md:w-9/12 w-full mx-auto">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="lg:pt-4 pt-3 pb-4 lg:pl-16 pl-10 pr-6 w-full mb-5 h-16 rounded-lg border-none outline-none bg-teal-50"
                />
                <button className="subscribe-btn md:absolute relative text-xl font-medium px-9 py-2 md:right-2 -right-2 top-2 ml-1">
                  Subscribe{" "}
                </button>
                <span className="absolute font-normal text-xl lg:left-6 left-4 top-4 block uppercase text-gray-400">
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
