import React from "react";

import Link from "next/link";
export default function freelancing() {
  return (
    <section className=" py-32 bg-red-300 img text-white bg-[url('/newletter-bg.png')] imgc bg-fixed">
      <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto">
        <div className=" justify-center">
          <div className="col-md-7  text-center text-black">
            <h2 className="text-white font-bold text-4xl pb-3">
              I'm <span className="text-orange-400">Available</span> for
              freelancing
            </h2>
            <p className="text-gray-500 pb-7">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <Link
              href="/download-cv"
              className="subscribe-btn md:px-10 px-7 py-4 text-orange-400 rounded-md mr-4 "
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
