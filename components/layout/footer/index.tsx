import Link from "next/link";
import Location from "@/components/layout/footer/location";
import Social from "@/components/layout/footer/Social";
import Upper from "@/components/layout/footer/upper";
import Logo from "@/components/layout/navbar/logo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// bottom to up
const btn = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    y: 25,
  },
};
const second = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    x: 50,
  },
};
export default function index() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <>
      <Upper />
      <footer className="bg-gray-800 pt-12 bg-[url('/footer-bg.png')] img bg-top ">
        <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto flex justify-center items-center flex-wrap ">
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <motion.div
              className="logo flex justify-center md:justify-start "
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}
            >
              <Logo />
            </motion.div>
            <motion.div
              className="para mt-6 text-white "
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}
            >
              <p>
                My name is Muhammad Muzammil Safdar. I am a web developer with
                2+ years of experience in Frontend. I used the technology of
                Html, Css, Js, React.js, Next.js, Tailwind css, Chakura UI,
                Framer Motion and deployment on vercel.
              </p>
            </motion.div>
            <motion.div
              className="social mt-6"
              ref={ref}
              variants={btn}
              initial="hidden"
              animate={control}
            >
              <h4 className="text-orange-500 mb-4 text-xl font-bold">
                Follow Me
              </h4>
              <Social />
            </motion.div>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 md:pl-10 pl-0 ">
            <h2 className="text-orange-500 mb-6 text-2xl font-semibold">
              Links
            </h2>
            <ul>
              {firstcolumn.map((navItem) => (
                <motion.li
                  ref={ref}
                  variants={second}
                  initial="hidden"
                  animate={control}
                  className="mb-3 text-base text-white"
                  key={navItem.id}
                >
                  <Link href={navItem.href}>{navItem.label}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12">
            <h2 className="text-orange-500 mb-6 text-2xl font-semibold">
              Services
            </h2>
            <ul>
              {secondcolumn.map((navItem) => (
                <li className="mb-3 text-base text-white" key={navItem.id}>
                  <Link href={navItem.href}>{navItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mb-8 md:w-6/12 lg:w-3/12 ">
            <h2 className="text-orange-500  mb-7 text-2xl font-semibold ">
              Have a Questions?
            </h2>
            <Location />
          </div>
        </div>
        <div className="text-center bg-gray-900 text-white py-6">
          <div className="container lg:px-10 md:px-7 sm:px-4 px-2 mx-auto ">
            <p>
              Copyright ©2023 All rights reserved | This template is made with
              by
              <span className="text-orange-400">
                <Link href="/"> Muzammil Safdar</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

interface NavItem {
  id: number;
  label: string;
  href: string;
}

const firstcolumn: Array<NavItem> = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/",
  },
  {
    id: 3,
    label: "Contact",
    href: "/",
  },
];

const secondcolumn: Array<NavItem> = [
  {
    id: 1,
    label: "Web Development",
    href: "/",
  },
  {
    id: 2,
    label: "Graphic Design",
    href: "/",
  },
  {
    id: 3,
    label: "Data Entry",
    href: "/",
  },
];
