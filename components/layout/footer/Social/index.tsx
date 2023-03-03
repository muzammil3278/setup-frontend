import Link from "next/link";
import React from "react";
import Image from "next/image";

function social() {
  return (
    <ul className="flex ">
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center hover:rotate-45 transition-all">
        <Link href="https://github.com/muzammilwebdev837">
          <Image src="/social/facebook.svg" 
          height="20" 
          width="20" 
          alt="facebook" 
          title="facebook" 
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
        <Link href="https://github.com/muzammilwebdev837">
          <Image src="/social/twitter.svg" 
          height="20" 
          width="20" 
          alt="twitter" 
          title="twitter" 
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
        <Link href="https://github.com/muzammilwebdev837" target="_blank">
          <Image src="/social/github.svg" 
          height="25" 
          width="25" 
          alt="github"  
          title="github"  
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
        <Link
          href="https://www.youtube.com/channel/UCrtnHcee1Dhk2ew2oKsxQ8g?sub_confirmation=1"
          target="_blank"
        >
          <Image src="/social/youtube.svg" 
          height="25" 
          width="25" 
          alt="you tube" 
          title="you tube" 
          />
        </Link>
      </li>
    </ul>
  );
}

export default social;
