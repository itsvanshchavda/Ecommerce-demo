import React from 'react'
import discount from '../assets/Discount.png'
const Products = () => {
  return (
    <div className='px-8'>
        <div className=''>
                <div className='px-20 font-bold text-5xl relative top-[5em]'>
                    <h1>Up to</h1>
                    <p className='py-3'><span>35%</span></p>
                    <p>Discount</p>
                    {/* Lines Breaks */}
                    <p className='text-xs font-normal text-wrap w-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, impedit!</p>

                </div>

            <img src={discount} alt="" className='w-[350px] h-[500px] object-contain'/>
          
        </div>
    </div>
  )
}

export default Products