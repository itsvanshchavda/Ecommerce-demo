import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import Vector1 from '../assets/Vector.png';
import BigShoe from '../assets/Big_shoes_1.png'
import Round1 from '../assets/Round_1.png';
import BigShoe2 from '../assets/Big_shoes_2.png'
import cutround from '../assets/Cutround.png'


const Hero = () => {
    return (
        <section className='w-full h-[90vh] py-[4em] relative overflow-hidden'>
            <div className='flex flex-col justify-start items-start px-8'>
                <div className="flex flex-row items-center absolute ml-2 bottom-[18em] w-[41px] h-[300px]">
                    <img src={Vector1} className="mb-4" alt="Vector1" />
                    <img src={Vector1} className="mb-4" alt="Vector1" />
                    <img src={Vector1} className="mb-4" alt="Vector1" />
                </div>
                <div className='text-6xl font-bold '>
                    <h1 className='mb-5'>Making</h1>
                    <h1 className='mb-5'>Luxury</h1>
                    <h1>Affordable</h1>
                </div>
                <div className='bg-black mt-5 rounded-xl flex items-center justify-between px-4 py-2'>
                    <IoCartOutline color='white' size={20} />
                    <button className='px-4 py-2 font-bold text-[17px] text-white transition-colors duration-300'>
                        Buy Now
                    </button>
                </div>
            </div>
            {/* Shoes Image and Round Shape */}
            <div className='max-sm:hidden relative flex flex-col-reverse top-0'>
                <div className='absolute left-1/2 transform -translate-x-1/2 mb-[-10em]'>
                    <img src={Round1} alt="Round Shape" />
                    <p className='font-bold uppercase float-end rotate-90'>10% Off</p>
                    <img src={BigShoe} alt="Big Shoe" className='w-[151px] h-full -mt-36 mx-10' />

                </div>

            </div>


            <div className='max-sm:hidden relative flex flex-col-reverse top-36'>
                <div className='absolute right-1 mb-[6em]'>
                    <img src={BigShoe2} alt="" className='' />
                    <img src={cutround} alt="Round Shape" className=' w-[260px]  float-right -mt-[20em] ' />
                </div>
            </div>



        </section>
    );
};

export default Hero;
