import React from 'react'
import pic1 from '../assets/App.png'
import playstore from '../assets/Playstore.png'
import appy from '../assets/apple.png'

const Section1 = () => {
  return (
    <div >

     <div className="bg-[#0D9733] mt-12 rounded-3xl relative pt-10 flex flex-col items-center m-auto h-[700px]">

     <h1 className='font-bold text-white text-4xl '> <span className='ml-10'>  Never Queue Again!   </span><br />
         Order For Gas & Petroleum <br /> 
           <span className='ml-20'> With Ease. </span></h1>
           <p className=' text-white text-xl pt-5'> <span className='ml-5'> OEnergy App allows you to order cooking gas, petrol, kerosine from any </span> <br />
         <span> merchant around you conveniently and get it delivered within fifteen minute. </span> </p>

           </div>
           <div className=" ">
            <img className='mt-20 absolute top-1/2 left-[139px]' src= {pic1} alt="" />
            <div className="logos flex justify-center relative mt-[23rem]">
                                <span className='mr-10'> <img src={playstore} alt="" /> </span>
                                <span> <img src={appy} alt="" /></span>
                               </div>
            
           </div>
           
    </div>
  )
}

export default Section1