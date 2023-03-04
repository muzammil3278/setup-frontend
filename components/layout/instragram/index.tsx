import Slider from "react-slick";

export default function index() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {NAV_ITEMS.map((navItem) => (
          <div>
            <div className="single-popular-item relative w-full">
              <img
                src={navItem.img}
                alt={navItem.label}
                title={navItem.label}
                className="image block h-auto w-full"
              />
              <div className="overlay">
                <div className="center text-xl absolute text-center text-black"> {navItem.label}</div>
              </div>
            
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

interface NavItem {
  id: Number;
  img: string;
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    id: 1,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 2,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 3,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 4,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 5,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 6,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 7,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 8,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
  {
    id: 9,
    img: "https://preview.colorlib.com/theme/shionhouse/assets/img/gallery/popular2.png",
    label: "@ ashion_shop",
    href: "#",
  },
];
