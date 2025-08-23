import React from 'react'
import gas from '../assets/gas.png'
import ride from '../assets/ride.png'
import carer from '../assets/career.png'

const Section6 = () => {
  return (
    <div>
        <div className="section6">
            <h1 className='font-bold text-2xl flex justify-center'>Send Us A Mail</h1>
            <p className='flex justify-center mt-5'>
                Your feedback matter to us! We value reviews and <br />
                  strive to deliver an exceptional experience.
            </p>
        </div>
        <div className="form flex justify-center m-auto mt-10 mb-10 rounded-md  bg-[#F3F3F3] w-[40%] ">
            <div className="pt-2 pb-2 flex justify-center gap-5">
                <input className='bg-white p-2 rounded-md ' type="text" placeholder='Write your message'  />
                <input className='bg-green-500 px-5 py-2 text-white rounded-md' type="submit" value= 'Send' />
            </div>
        </div>

        <div className="Section7">

            <h1 className='font-bold text-3xl flex justify-center m-auto'>Let’s Do It Together</h1>
            <div className="cards flex justify-around mb-10 mt-10">
                <div className="card1 w-1/4 ml-5 p-5  ">
                    <img className='w-[150px] flex justify-center m-auto' src= {gas} alt="" />
                    <h4 className='mt-5 flex font-bold justify-center m-auto'>Become A Merchant</h4>
                    <p className='mt-2 flex justify-center m-auto'>
                        Grow with OEnergy! Our technology and
                         user base can help you boost sales and
                        unlock new opportunities!
                    </p>
                    <input className='bg-[#0D9733] flex justify-center m-auto mt-5 px-5 py-2 text-white rounded-md' type="submit" value= 'Send' />

                </div>
                <div className="card2 w-1/4 ml-5 p-5">
                    <img className='w-[150px] flex justify-center m-auto' src= {ride} alt="" />
                    <h4 className='mt-5 flex font-bold justify-center m-auto'>Become A Rider</h4>
                    <p className='mt-2 flex justify-center m-auto'>
                        Be your own boss! Enjoy flexibility,
                        freedom and competitive earnings by
                          delivering with OEnergy.
                    </p>
                    <input className='bg-[#0D9733] flex justify-center m-auto mt-5 px-5 py-2 text-white rounded-md' type="submit" value= 'Send' />

                </div>
                <div className="card3 w-1/4 ml-5 p-5">
                    <img className='w-[150px] flex justify-center m-auto' src= {carer} alt="" />
                    <h4 className='mt-5 font-bold flex justify-center m-auto'>Career</h4>
                    <p className='mt-2 flex justify-center m-auto'>
                        Ready for an exciting new challenge?
                          If you’re ambitious, humble, and love
                             working with others, then we want to
                                hear from you!
                    </p>
                    <input className='bg-[#0D9733] flex justify-center m-auto mt-5 px-5 py-2 text-white rounded-md' type="submit" value= 'Send' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Section6