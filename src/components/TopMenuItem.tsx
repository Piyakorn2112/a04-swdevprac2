"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'


const TopMenuItem = ({
  name="",
  link=""
}={}) => {
  return (
    <Link href={link}
      style={{display:"inline-block" , height:'100%', backgroundColor:"gray", marginTop:"0"}}
    >
      {name}
    </Link>
  )
}

export default TopMenuItem