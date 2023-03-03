import React from 'react'
import Link from "next/link";

export default function btn2() {
  return (
    <Link
        href="/hire-me"
        className="md:px-10 px-5 md:py-4 py-3 text-white border-solid bg-orange-300 border-white font-bold rounded-md hover:text-orange-300 transition-all hover:bg-orange-100"
      >
        Hire ME
      </Link>
  )
}
