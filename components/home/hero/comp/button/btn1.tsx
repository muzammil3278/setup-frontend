import React from 'react'
import Link from "next/link";

export default function btn1() {
  return (
    <Link
    href="/download-cv"
    className="subscribe-btn md:px-10 px-8 py-4 text-orange-400 rounded-md mr-4 "
  >
    Download CV
  </Link>
  )
}
