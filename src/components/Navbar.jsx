import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaBars, FaRegHeart, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const Navlink = {
    links: [
      { id: 1, title: 'Home' },
      { id: 2, title: 'Shop' },
      { id: 3, title: 'About us' },
      { id: 4, title: 'Request an article' },
      { id: 5, title: 'How it works' },
    ],
  };

  return (
    <section className='w-full '>
      <div className='px-4 mt-8 flex justify-between items-center'> {/* Maintain some padding for aesthetics */}
        <h1 className='font-bold text-2xl mb-2 cursor-pointer'>Shoes</h1>

        {/* Navigation for Tablet (768px) Viewport */}
        <div className='hidden lg:flex text-center font-semibold text-base relative'>
          <ul className='uppercase flex justify-center gap-6'> {/* Center align and adjust gap */}
            {Navlink.links.map((link) => (
              <li key={link.id} className='cursor-pointer hover:text-[#F6A192] duration-200 relative'>{link.title}</li>
            ))}

        
          </ul>
          {/* Round shape */}
        </div>

        <div className='flex justify-end items-end space-x-4'> 
          <div className="flex items-center"> 
            <CiSearch size={24} className='text-gray-500 relative left-3 bottom-1' />
            <input type="text"  className='bg-transparent border-b-2 border-black outline-none px-4' />
          </div>
          <span><FiShoppingBag size={24} /></span>
          <span><FaRegHeart size={24} /></span>
        </div>

        {/* Mobile Nav */}
        <div className='cursor-pointer pr-3 z-10 text-gray-500 lg:hidden' onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {nav && (
        <div className='flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-75'>
          <div className='text-center relative'>
            <ul className='text-black font-semibold uppercase rounded-md'>
              {Navlink.links.map((link) => (
                <li key={link.id} onClick={() => setNav(false)} className='cursor-pointer mb-2 hover:bg-[#FFD6A6] px-4 py-2 relative'>
                  {link.title}
                </li>
              ))}
            </ul>
            {/* Round shape */}

          </div>
        </div>
            
      )}
    </section>
  );
};

export default Navbar;
