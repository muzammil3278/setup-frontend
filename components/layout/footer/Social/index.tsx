import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
} from "react-icons/fa";
function social() {
  return (
    <ul className="flex ">
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center hover:rotate-45 transition-all">
      <Link href="https://web.facebook.com/profile.php?id=100090769396207" target="_blank">
            <Image src="/social/facebook.svg" 
          height="20" 
          width="20" 
          alt="facebook" 
          title="facebook" 
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
      <Link href="https://www.youtube.com/channel/UCrtnHcee1Dhk2ew2oKsxQ8g?sub_confirmation=1" target="_blank">
         
          <Image src="/social/youtube.svg" 
          height="25" 
          width="25" 
          alt="you tube" 
          title="you tube" 
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100 rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
      <Link href="https://github.com/muzammil3278" target="_blank">
            <Image src="/social/github.svg" 
          height="25" 
          width="25" 
          alt="github"  
          title="github"  
          />
        </Link>
      </li>
      <li className="mr-2 bg-gray-100  rounded-md h-10 w-10 justify-center flex items-center  hover:rotate-45 transition-all">
      <Link href="https://www.linkedin.com/in/muhammad-muzammil-safdar-2b1851267/" target="_blank">
            <FaLinkedin className="text-blue-500"/>
          </Link>
      </li>
    </ul>
  );
}

export default social;
