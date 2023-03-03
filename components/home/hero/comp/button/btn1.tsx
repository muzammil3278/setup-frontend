import React from 'react'
import Link from "next/link";

export default function btn1() {
  return (
    <Link
    href="/download-cv"
    className="md:px-10 px-5 md:py-4 py-3 bg-orange-100 text-orange-400 rounded-md mr-4 font-bold "
  >
    Download CV
  </Link>
  )
}
