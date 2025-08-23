import React from 'react'
import apple from '../assets/apple.png'
import play from '../assets/Playstore.png'
import phone from '../assets/phone.png'
import insta from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/fb.png'

const Footer = () => {
  return (
    <div className=''>
        <div className="bg-black px-10 pt-5 flex  justify-between">
            <div className="flex gap-10">
            <div className="bg-white p-1  rounded-lg w-[15rem] flex justify-center gap-2">
             <img className='w-[7rem] ' src= {apple} alt="" />
             <img className='w-[7rem]' src= {play} alt="" />
            </div>
            <div className="flex gap-2">
                <img className='w-[2rem]' src= {phone} alt="" />
                <span className='text-white'>24/7 support</span>
            </div>
            </div>
            <div className="flex gap-5">
            <img className='w-[1rem] ' src= {facebook} alt="" />
            <img className='w-[1rem]' src= {insta} alt="" />
            <img className='w-[1rem]' src= {twitter} alt="" />
            </div>
        </div>
        < p className='bg-black px-10 text-white p-3'>
            At O’ENERGY, we prioritize your privacy. Here's a brief overview of how we handle your information, We collect personal information necessary to provide gas services and support. We use your information to improve our services and personalize your experience.We may share your information with trusted service providers and for legal compliance. In the event of a business transfer, your information may be transferred. We protect your information and adhere to applicable privacy laws.
For more details, please read our full Privacy Policy.
        </p>
    </div>
  )
}

export default Footer