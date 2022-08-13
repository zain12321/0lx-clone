import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import Link from 'next/link'
import Motercycle from '../pages/Motercycle'
function Navbar() {
  return (
    <>
    <section className='flex   items-center pt-1 lg:pt-[110px]'>
      <Link href='/Categories'><a>
           <div className='flex items-center pl-8   sm:px-8 space-x-1 sm:space-x-2'>
       <h1 className='text-[#002F37] text-[10px] sm:text-sm font-bold'>ALL CAATEGORIES</h1>
       <RiArrowDownSLine className='h-6 w-6 sm:h-9 sm:w-9 cursor-pointer hover:rotate-180'/>
           </div></a></Link>
           <div className='pl-11 sm:pl-0'>
         <ul className='hidden sm:flex  space-x-1 sm:space-x-3  text-black sm:text-[#002F34]'>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
             <Link href="/Mobilephone">
             <a>
             Mobile Phones
             </a>
             </Link>
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
               <Link href="/Cars">
               <a>
               Cars
               </a></Link>
               
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
         <Link href="/Motercycle">

  
         <a>
         Motercycle</a></Link>
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
              <Link href='Houses'>
              
              <a> Houses</a></Link>
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px ] sm:text-[15px] '>
            <Link href="/Tv">
            <a>
            TV-Video-Audio
            </a>
            </Link>
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
              <Link href="/Tablets">
              <a>
              Tablets</a></Link>
               </li>
             <li className='cursor-pointer hover:text-blue-500 text-[20px] sm:text-[15px] '>
               <Link href="/LandandPlots">
               <a>
               Land & Plots</a></Link>
               </li>
         </ul>
           </div>
           
    </section>
    <div>
    <div className='Home'> 
    </div>
    </div>
     
    <div className='hidden pl-60  sm:pl-[100px]  md:pl-[400px] xl:pl-[80px] sm:flex sm:p-4
     sm:items-center sm:justify-center'>
         <img 
        className='h-[120px] p-3 w-[960px] sm:h-[120px] sm:w-[700px] '
         src="https://tpc.googlesyndication.com/simgad/18008168111004451567"
         alt=''
         />
     </div>
    </>
  )
}

export default Navbar