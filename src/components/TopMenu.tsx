import React from 'react'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
const TopMenu = () => {
  return (
    <div
      style={{
        position:"fixed",
        top:"0",
        left:"0",
        right:"0",
        height:"40px",
        backgroundColor:"white",
        textAlign:"right"
      }}
    >
      <TopMenuItem name='Booking' link='/booking'/>
      <div style={{width:"60px", height:"20px", display:"inline-block", verticalAlign: "middle"}}>
        <Image src={"/img/logo.png"} alt='logo' width={40} height={40} style={{ verticalAlign: "middle" }}/>
      </div>
      
    </div>
  )
}

export default TopMenu