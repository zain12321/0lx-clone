import React from 'react'
import Image from 'next/image'
import { RiHeartLine } from 'react-icons/ri'
import {  MdSpeed } from 'react-icons/md'
import {RiHotelBedLine} from 'react-icons/ri'
import Link from 'next/link'
import Sell from '../Images/sell.png'
import {AiOutlineCar } from 'react-icons/ai'
import {BiBuildingHouse } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDownSLine } from 'react-icons/ri'
import {BsCartDash } from 'react-icons/bs'
import { useState } from 'react';
import  { FaFacebookF }  from 'react-icons/fa'
import { AiOutlineTwitter }  from 'react-icons/ai'
import  { BsFillPlayFill }  from 'react-icons/bs'
import { FiInstagram }  from 'react-icons/fi'
import { TabletsItems } from '../components'



const refreshment = [
    {id:1, title: "New A1 House", 
    image: "https://s.alicdn.com/@sc04/kf/He88ae67e812c4f0a99f0e863cfd30d1b1.jpg_300x300.jpg",
    price:"RS 16,000",
     desc:"We have a best servises for you",
    featured:true, isLike: true},
    {id:2, title: "New Mobile S3",  
     image: "https://s.alicdn.com/@sc04/kf/H4523a773417d429aad8b31fd9225491b7.jpg_220x220.jpg", 
     price:"RS 32,000",
     desc:"Hill Park, Karachi 2 Weeks ago",
    featured:true, isLike: false},
    {id:3, title: "Worlds best Sofa", 
    image: "https://s.alicdn.com/@sc04/kf/HTB1NUDyaIfrK1RkSnb4q6xHRFXaQ.jpg_300x300.jpg", 
    price:"RS 92,000",
    desc:"we have a very best sofas ",
    featured:true},
    {id:4, title: "home for rent", 
    image: "https://s.alicdn.com/@sc04/kf/HTB1c2NQSpXXXXXGXVXXq6xXFXXXC.jpg_300x300.jpg", 
    desc:"Interrior houses scheme ",
    price:"RS 120,000",
     featured:true},
     {id:5, title: "Worlds best Sofa", 
    image: "https://s.alicdn.com/@sc04/kf/H58f5ccc4c9be4c79aeaa753cbc8532e5u.jpg_300x300.jpg", 
    price:"RS 92,000",
    desc:"we have a very best sofas ",
    featured:true},
    {id:6, title: "home for rent", 
    image: "https://s.alicdn.com/@sc04/kf/HTB1VrECaovrK1RjSspcq6zzSXXaL.jpg_300x300.jpg", 
    desc:"Interrior houses scheme ",
    price:"RS 120,000",
     featured:true},
     {id:7, title: "Worlds best Sofa", 
     image: "https://s.alicdn.com/@sc04/kf/H472e64b935eb4aa0bf71dd489f14d256k.jpg_300x300.jpg", 
     price:"RS 92,000",
     desc:"we have a very best sofas ",
     featured:true},
     {id:8, title: "home for rent", 
     image: "https://s.alicdn.com/@sc04/kf/H032a6782cfbc42ed933ed8b1da8443a82.jpg_300x300.jpg", 
     desc:"Interrior houses scheme ",
     price:"RS 120,000",
      featured:true},
      {id:9, title: "New A1 House", 
    image: "https://s.alicdn.com/@sc04/kf/H98b0a694bc9d4e1eb5a7e608c358901aJ.jpg_300x300.jpg",
    price:"RS 16,000",
     desc:"We have a best servises for you",
    featured:true, isLike: true},
    {id:10, title: "New Mobile S3",  
     image: "https://s.alicdn.com/@sc04/kf/H8ebfca680c5e450eaa84d9750a48baf9q.jpg_300x300.jpg", 
     price:"RS 32,000",
     desc:"Hill Park, Karachi 2 Weeks ago",
    featured:true, isLike: false},
    {id:11, title: "Worlds best Sofa", 
    image: "https://s.alicdn.com/@sc04/kf/Hf544b98cc9804db9a38e718014886890X.png_300x300.png", 
    price:"RS 92,000",
    desc:"we have a very best sofas ",
    featured:true},
    {id:12, title: "zain house", 
    image: "https://s.alicdn.com/@sc04/kf/H17dc8c2a8410409db693cf4f837daf38c.jpg_300x300.jpg", 
    desc:"Interrior houses scheme ",
    price:"RS 120,000",
     featured:true},
     
   
   
  ]

function Tablets() {
    const [count, setCount] = useState(0);
    const [run, setRun] = useState(0);

  return (
      <>


  
    <section className='lg:fixed z-20 bg-white sm:bg-gray-100 sm:w-screen xl:w-[1500px]'> 
  
        <div className='flex space-x-32  sm:space-x-8 md:space-x-80 
         lg:space-x-8 sm:px-8 py-2 items-center   sm:pl-8  md:pl-6 lg:pl-8'>
           <div>
               <Link href="/">
               <a>
               <img className='h-7 w-10'
               src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt=''/>
               </a>
               </Link>
           </div>
           <div className='flex items-center hover:text-blue-800 '>
               <AiOutlineCar className='h-6 w-9'/>
              <p className='text-[13px] font-semibold'> MOTRORS  </p>
           </div>
           <div className='flex items-center hover:text-blue-800 pl-[800px] sm:pl-0 '>
               <BiBuildingHouse className='h-[22px] w-8'/>
              <p className='text-[12px] font-medium'> PROPERTY
               </p>
           </div>
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
    <input type="search" id="search" placeholder='Find Caars, Mobil Phones aand more...'
    required 
    className='p-2 w-[600px] sm:w-80 md:w-[700px] outline-none'
    /><div className='bg-[#002F34] h-12 rounded-tr-md rounded-br-md'>
        <BsSearch className=' pt-3 px-1 h-9 w-14 text-[#FFFFFF]'/>
    </div>
     </div>


     <div className='flex space-x-4 items-center'>
         <div className='flex pl-4'>
             <button  className='flex  text-[#002F34] font-bold '>

          <BsCartDash className='h-6 w-6'/>       
          <p className='pl-2 text-orange-600'>{count} </p>
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
  

    <section className='pt-4 xl:pt-40'>
     
    <h1 className='text-xl font-bold sm:font-normal sm:text-3xl text-[#002F34] pl-16 pt-4'>
          TABLETS PRODUCTS</h1>
         <div className='flex '>

             <div className='mx-11 xl:mx-16 gap-x-[440px] xl:gap-x-2 lg:gap-y-2 mt-6 grid lg:grid-rows-2 
     grid-rows-4 grid-cols-3        lg:grid-cols-4 '>
                  {refreshment?.map((item)=>(
                 <TabletsItems {...item}/>
                   ) )}
             </div>



     </div>
</section>

<section className='flex items-center justify-between mt-44 w-[1370px] md:mt-60 xl:mt-16 xl:w-[1340px]'>
    <div className='flex justify-between '>
  <div>
      <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
  </div>
<div className='pt-11  pl-11'>
   <div className='border-r border-gray-400 text-[#002F34] '>

<h1 className='text-4xl font-bold pr-28'>TRY THE OLX APP</h1>
    <p className='pt-8 text-xl'>Buy, sell and find just about anything using <br/>the app on your mobile.</p>
      

   </div>
</div>
 
    </div>


<div className=''>
   <h1 className='text-[#002F34] font-bold'>GET YOUR APP TODAY</h1>
  <div className='flex pt-2 pr-6'>
  <img
   className='h-14 w-32' src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
   <img
    className='h-14 w-32'  src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
   <img 
    className='h-14 w-32' src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" />
    
  </div>
</div>

    </section>


<section className='flex pl-12 pt-2 sm:pt-4 mt-60 sm:mt-4 pr-4 
pb-11 space-x-11 sm:space-x-24  border-t border-gray-300 bg-gray-100 w-[1340px]'>
     <div>
         <h1 className='text-xl sm:text-sm font-bold text-[#002F34] '>POPULAR CATEGORIES</h1>
         <ul className=' flex  flex-col text-2xl sm:text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>Cars</li>
             <li className='hover:text-[#002F34]'>Flats for rent</li>
             <li className='hover:text-[#002F34]'>Mobile Phones</li>
             <li className='hover:text-[#002F34]'>Jobs</li>
         </ul>
     </div>

     <div>
         <h1 className='text-xl sm:text-sm font-bold text-[#002F34] '>TRENDING SEARCHES</h1>
         <ul className=' flex  flex-col text-2xl sm:text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>Bikes</li>
             <li className='hover:text-[#002F34]'>Watches</li>
             <li className='hover:text-[#002F34]'>Books</li>
             <li className='hover:text-[#002F34]'>Dogs</li>
         </ul>
     </div>

     <div>
         <h1 className='text-xl sm:text-sm font-bold text-[#002F34] '>ABOUT US</h1>
         <ul className=' flex  flex-col text-xl sm:text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>About EMPG</li>
             <li className='hover:text-[#002F34]'>Olx Blog</li>
             <li className='hover:text-[#002F34]'>Contact us</li>
             <li className='hover:text-[#002F34]'>Olx for Buisseness</li>
         </ul>
     </div>

     <div>
         <h1 className='text-xl  sm:text-sm font-bold text-[#002F34] '>OLX</h1>
         <ul className=' flex  flex-col text-xl sm:text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>Help</li>
             <li className='hover:text-[#002F34]'>Site Of Map</li>
             <li className='hover:text-[#002F34]'>Terms Of Use</li>
             <li className='hover:text-[#002F34]'>Private Policy</li>
         </ul>
     </div>

     <div className='pl-24'>
      <div className=''>
      <h1 className=' text-sm font-bold text-[#002F34] '>FOLLOW US</h1>
      
     
   <ul className='flex space-x-1 cursor-pointer'>
   <li className='h-11 w-11 sm:h-6 sm:w-6 bg-gray-100 rounded-full border-2 border-gray-400'> <FaFacebookF 
   className='h-9 w-9 sm:h-6 sm:w-6  text-gray-500 pt-1
    pr-1'/></li>
     <li  className='h-11 w-11 sm:h-6 sm:w-6 bg-gray-100 rounded-full border-2 border-gray-400'> 
          <AiOutlineTwitter className='h-9 w-9 sm:h-6 sm:w-6 text-gray-500 pt-1
    sm:pr-1'/></li>
       <li className='h-11 w-11 sm:h-6 sm:w-6 bg-gray-100 rounded-full border-2 border-gray-400'>   
        <BsFillPlayFill className='h-9 w-9 sm:h-6 sm:w-6 text-gray-500 sm:pb-1
    sm:pr-1 pl-1 sm:pl-[2px]'
    /></li>
        <li className='h-11 w-11 sm:h-6 sm:w-6 bg-gray-100 rounded-full border-2 border-gray-400'>  
         <FiInstagram className='h-9 w-9 sm:h-6 sm:w-6 text-gray-500 pt-1
    pr-1'/></li>
   </ul>

         
      </div>
      <div className='flex space-x-1 pt-4'>
          <img 
         className="h-14 w-20" src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" />
          <img 
          className="h-14 w-20" src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" />
          <img 
          className="h-14 w-20" src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" />
      </div>
     </div>






    
    </section>

<div className='bg-[#002F34] text-[#FFFFFF] mt-80 sm:mt-0 text-2xl sm:text-sm font-bold flex p-6 flex-row-reverse w-[1340px]'>
   . © 2006-2022 OLX <p className='font-bold '> Free Classifieds in Pakistan  </p>
</div>
    </>
  )
}

export default Tablets