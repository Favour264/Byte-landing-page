import React from 'react'
import bike from '../assets/bike.png'
import cyber from '../assets/Okec1.png'
import thumb from '../assets/thumb.png'

const Section2 = () => {
  return (
    <div>
        <div className="bg-[#D4F5DD] mt-20">
          <div className="pt-10">
            <h1 className='pt-10 flex justify-center m-auto  font-bold text-3xl'>Get Familiar With Our Sevices</h1>
            <p className='  text-xl pt-5 '>
             <span className='flex items-center m-auto justify-center '> A complete suite of the most helpful gas & petroleum delivery </span> 
                <br /> <span className='flex  justify-center '> products at your fingertips </span></p>
            </div>


            <div className="cards flex justify-around mt-10 pb-10">
              
              <div className="card1 bg-white w-1/4 h-[300px] rounded-sm p-5">
              <img className='size-[50px]' src= {cyber} alt="" />
              <h1 className='text-green-500 font-bold'>Customer Merchant <br /> Connection</h1>
              <p>
                We connect you with all the <br /> marchants around your location <br /> and make patronage and <br />
                communication very easy.
              </p>
              </div>
              <div className="card2 bg-white w-1/4 rounded-sm p-5">
              <img className='size-[50px]' src= {bike} alt="" />
              <h1 className='text-green-500 font-bold'>Fast Delivery</h1>
              <p>We help you deliver your order <br /> within 15mins and also track <br /> the delivery progress</p>
              </div>

              <div className="card3 bg-white w-1/4 rounded-sm p-5">
              <img className='size-[50px]' src= {thumb} alt="" />
              <h1 className='text-green-500 font-bold'>Quality Control</h1>
              <p>
                We ensure every product your <br /> order are of good quality and <br /> quantity before it gets to you
              </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Section2