import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import data from "./data.json";

export default function index() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
     
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className=" testimony-section relative py-7">
      <div className="overlay"></div>
      <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto">
        <div className="row pb-4">
          <div className="col-md-7 relative ">
            <span className="uppercase text-white mb-1 block text-sm font-medium">
              Testimonial
            </span>
            <h2 className="mb-4 font-semibold text-4xl text-black">
              What Are Clients Says
            </h2>
          </div>
        </div>
      </div>
      <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto py-7">
        <div className=" py-12 text-white">
          <Slider {...settings}>
        {NAV_ITEMS.map((user) => (
                <div className="px-1">
                  <div className="py-4 block relative bg-gray-100 p-7 rounded-md">
                    <div className="text"  key={user.id}>
                      <p className="star flex pb-2">
                        <Image src="/client/star.png" height="20" width="20" alt="rating" title="rating" />
                        <Image src="/client/star.png" height="20" width="20" alt="rating" title="rating" />
                        <Image src="/client/star.png" height="20" width="20" alt="rating" title="rating" />
                        <Image src="/client/star.png" height="20" width="20" alt="rating" title="rating" />
                        <Image src="/client/star.png" height="20" width="20" alt="rating" title="rating" />
                      </p>
                      <p className="mb-6 mt-3 text-black">{user.para}</p>
                      <div className="flex justify-start items-center">
                        <div>
                          <Image
                            src={user.authorimg}
                            title={user.authorname}
                            alt={user.authorname}
                            height="20" width="20"
                            className=" w-20 h-20 relative rounded-full"
                          />
                        </div>
                        <div className="pl-3">
                          <p className="mb-0 text-xl font-medium text-blue-400">
                            {user.authorname}
                          </p>
                          <span className="uppercase text-sm text-green-400 font-medium">
                            {user.authortag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}



interface NavItem {
  id: number;
  authorname: string;
  authortag: string;
  authorimg: string;
  para: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: 1,
    authorname: "Roger Scott",
    authortag: "Marketing Manager",
    authorimg: "/bg_1.png",
    para: "Express delivery inno service effective logistics solution for delivery of small cargo delivery service."
  },
  {
    id: 2,
    authorname: "Roger Scott",
    authortag: "Marketing Manager",
    authorimg: "/bg_1.png",
    para: "Express delivery inno service effective logistics solution for delivery of small cargo delivery service."
  },
  {
    id: 3,
    authorname: "Roger Scott",
    authortag: "Marketing Manager",
    authorimg: "/bg_1.png",
    para: "Express delivery inno service effective logistics solution for delivery of small cargo delivery service."
  },
];
