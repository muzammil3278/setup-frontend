import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="brand-area">
        <div className="container mx-auto px-8 ">
          <Slider {...settings}>
            <div className="single-brand ">
              <img
              className="h-40"
                src="/skill/html.png"
                alt="html"
                title="html"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                src="/skill/css.png"
                alt="css"
                title="css"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                src="/skill/js.png"
                alt="javascript"
                title="javascript"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                src="/skill/git.png"
                alt="git"
                title="git"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                 src="/skill/github.png"
                 alt="github"
                 title="github"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                 src="/skill/react.png"
                 alt="react js"
                 title="react js"
              />
            </div>
            <div className="single-brand ">
              <img
              className="h-40"
                 src="/skill/next.png"
                 alt="next js"
                 title="next js"
              />
            </div>
            <div className="single-brand ">
              <img
                src="	https://preview.colorlib.com/theme/calvin/assets/img/gallery/brand3.png"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
