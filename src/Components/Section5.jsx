import React from 'react'
import Test from '../assets/Testimony.png'
import playstore from '../assets/google.png'
import apple from '../assets/apple-logo.png'
import star from '../assets/Star.png'

const Section5 = () => {
  return (
    <div>
      <div className="container3 flex p-10 justify-around w-6/6">
          <div className="write-up ml-20  w-3/6 mt-[25%]">
            <h1 className='font-bold text-2xl'> Our User Review </h1>
            <div className="flex playstore gap-2">
              <img className='size-[40px]' src= {playstore} alt="" />
              <span className='font-bold mt-2'> 4.6 rating</span>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
            </div>
            <div className="apple flex gap-2 ">
              <img className='size-[40px]' src= {apple} alt="" />
              <span className='font-bold mt-2'> 4.6 rating</span>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
              <img className="size-[15px] mt-3" src= {star}></img>
            </div>
          </div>
      
          <div className="immg w-3/6 ">
              <img className='size-[40rem]' src={Test} alt="picture" />
          </div>
      
          </div>
    </div>
  )
}

export default Section5