import React from 'react'
import playstore from '../assets/Playstore.png'
import appy from '../assets/apple.png'
import double from '../assets/double.png'

const Section4 = () => {
  return (
    <div className='bg-[#0D9733] mb-10'>
        <div className="pt-10">
            <h1 className='flex justify-center text-white text-2xl font-bold'> Download The OEnergy App </h1>
            <p className='flex justify-center text-white pt-5'>Register and start ordering in less than two minutes</p>
        </div>
        <div className="logos flex justify-center mt-10  ">
         <span className='mr-10'> <img src={playstore} alt="" /> </span>
         <span> <img src={appy} alt="" /></span>
        </div>
       <div className="flex justify-center mt-20">
        <img className='w-2/3' src= {double} alt="" />
       </div>


    </div>
  )
}

export default Section4