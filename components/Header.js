import React from 'react'
import Image from 'next/image'
import Sell from '../Images/sell.png'
import {AiOutlineCar } from 'react-icons/ai'
import Link from 'next/link'
import {BiBuildingHouse } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'
function Header() {
  return (
    <section className='lg:fixed z-20 bg-white sm:bg-gray-100 sm:w-screen xl:w-[1500px]'> 
        <div className='flex space-x-32  sm:space-x-8 md:space-x-80 
         lg:space-x-8 sm:px-8 py-2 items-center   sm:pl-8  md:pl-6 lg:pl-8'>
           <div>
               
               <img className='h-7 w-10'
               src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt=''/>
         
           </div>
           <Link href="/Cars"><a>
           <div className='flex items-center hover:text-blue-800 '>
               <AiOutlineCar className='h-6 w-9'/>
              <p className='text-[13px] font-semibold'>
                   MOTRORS 
                    </p>
           </div></a>
           </Link>
           <Link href="/LandandPlots">
           <a>
           <div className='flex items-center hover:text-blue-800 pl-[800px] sm:pl-0 '>
               <BiBuildingHouse className='h-[22px] w-8'/>
              <p className='text-[12px] font-medium'> 
              PROPERTY
               </p>
           </div></a>
           </Link>
        </div>

        {/* Search Buttons */}

      <div className='flex space-x-20 sm:space-x-4  mx-3 my-1 mb-2 items-center '>
     <div className='flex items-center border-2 sm:border border-[#002F34]  h-12 ml-6 rounded-md bg-[#FFFFFF]'>
          <div className='flex items-center 
          space-x-4 p-2'>
              <BsSearch className='h-5 w-5 text-[#002F34] font-bold'/>
              <input type='seaarch' id="search" placeholder="Pakistan"
              required className='placeholder:text-[18px]  outline-none  placeholder:text-[#002F37]' />
          </div>
          <div className=''><RiArrowDownSLine className='p-2 h-16 w-14 font-semibold'/></div>
     </div>

     <div className='flex items-center justify-between  border-2 sm:border border-[#002F37]  h-12  
      w-[780px]  rounded-md
               bg-[#FFFFFF] '>
    <input type="search" id="search" placeholder='Find Cars, Mobile Phones aand more...'
    required 
    className='p-2 w-[600px] sm:w-80 md:w-[700px] outline-none'
    /><div className='bg-[#002F34] h-12 rounded-tr-md rounded-br-md'>
        <BsSearch className=' pt-3 px-1 h-9 w-14 text-[#FFFFFF]'/>
    </div>
     </div>


     <div className='flex space-x-4 items-center'>
         <div className='pl-4'>
             <button className='border-b-2 text-[#002F34] border-[#002F34] font-bold '>
               <Link href="/Login">
               <a>
               Login</a></Link>
               </button>
         </div>
         <div className='Ring shadow-2xl'>
    <div className='text-[#002F37] text-[16px] font-bold pl-[28px] pt-1 '><span
     className='text-2xl font-bold 
    '>+
    </span><span>SELL</span></div>
         </div>
     </div>
      </div>

       
    </section>
  )
}

export default Header