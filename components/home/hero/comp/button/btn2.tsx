import React from 'react'
import Link from "next/link";

export default function btn2() {
  return (
    <Link
        href="/hire-me"
        className="subscribe-btn md:px-10 px-8 py-4  font-bold rounded-md"
      >
        Hire ME
      </Link>
  )
}
