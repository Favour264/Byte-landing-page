import React from 'react'
import logo from '../assets/Okec.png'
import nig from '../assets/Mask.png'
import '../index.css'; 


const Navbar = () => {
  return (
    <div>
     <nav className='mt-3 flex justify-between  '>
      <div className="">
       <img src={logo} alt="image" />
      </div>
      <div className="mt-3 ">
        <span className='text-xl mr-5'>Services</span>
        <span className='text-xl'>Company</span>
      </div>
      <div className="mt-2">
        <img src= {nig} alt="image" />
      </div>
     </nav>
    
    </div>
  )
}

export default Navbar