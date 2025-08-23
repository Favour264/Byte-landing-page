import React from 'react'
import group1 from '../assets/Group13.png'
import group12 from '../assets/Group12.png'
import group11 from '../assets/Group11.png'


const Section3 = () => {
  return (
    <div className='main-container'>
      <div className="container1 flex p-10 justify-around w-6/6">
    <div className="write-up  w-3/6 mt-[27%]">
      <h1 className='font-bold text-2xl'> Over 1000 Merchants </h1>
      <p className='mt-5'>
        In the ever revolving energy landscape, one company <br />stands out as a trusted provider of
        gas supply to <br />solutions to fuel the progress of countless communities <br />with a 
        failthful  obligation to greatness,out gas supply <br /> organisation has effectively served 
        more than 1000 <br />traders enabling them with dependable admitance to <br />a fundamental assets.
        We strive to promote prosperity <br /> sustainablility and growth across a variety of industries <br /> as we continue
        to expand our reach.
      </p>
    </div>
    <div className="immg w-3/6">
        <img className='size-[40rem]' src={group1} alt="picture" />
    </div>
    </div>

          <div className="container1 flex p-10 justify-around w-6/6">
          <div className="immg w-3/6 ">
        <img className='size-[40rem]' src={group12} alt="picture" />
    </div>
    <div className="write-up ml-20  w-3/6 mt-[27%]">
      <h1 className='font-bold text-2xl'> Track Your Order </h1>
      <p className='mt-5'>
        Experience the peace of mind that comes with knowing the exact status of your order.
         Whether it’s the confirmation of your order, dispatch details, estimated arrival
          time, or any unexpected delays, Our system gives you real - time updates on the
           status delivery
      </p>
    </div>
    </div>

<div className="container3 flex p-10 justify-around w-6/6">
    <div className="write-up ml-20  w-3/6 mt-[20%]">
      <h1 className='font-bold text-2xl'> Orders For Family/Friends </h1>
      <p className='mt-5'>
        By utilizing this feature, you can ensure that your loved ones have
         uninterrupted access to a reliable gas supply. Whether it’s for their
          home heating, cooking, or running their business, our commitment to 
          excellence extends to each delivery, tailoring our services to thier preferences.
      </p>
    </div>

    <div className="immg w-3/6 ">
        <img className='size-[40rem]' src={group11} alt="picture" />
    </div>

    </div>


    </div>
  )
}

export default Section3