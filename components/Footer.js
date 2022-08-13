import React from 'react'
import  { FaFacebookF }  from 'react-icons/fa'
import { AiOutlineTwitter }  from 'react-icons/ai'
import  { BsFillPlayFill }  from 'react-icons/bs'
import { FiInstagram }  from 'react-icons/fi'
function Footer() {
  return (
      <>
    <section className='flex pl-12 pt-4 pr-4 pb-11 space-x-40 sm:space-x-28  
    border-t border-gray-300 bg-gray-100 '>
     <div>
         <h1 className=' text-sm font-bold text-[#002F34] '>POPULAR CATEGORIES</h1>
         <ul className=' flex  flex-col text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>Cars</li>
             <li className='hover:text-[#002F34]'>Flats for rent</li>
             <li className='hover:text-[#002F34]'>Mobile Phones</li>
             <li className='hover:text-[#002F34]'>Jobs</li>
         </ul>
     </div>

     <div>
         <h1 className=' text-sm font-bold text-[#002F34] '>TRENDING SEARCHES</h1>
         <ul className=' flex  flex-col text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>Bikes</li>
             <li className='hover:text-[#002F34]'>Watches</li>
             <li className='hover:text-[#002F34]'>Books</li>
             <li className='hover:text-[#002F34]'>Dogs</li>
         </ul>
     </div>

     <div>
         <h1 className=' text-sm font-bold text-[#002F34] '>ABOUT US</h1>
         <ul className=' flex  flex-col text-sm text-gray-500 '>
             <li className='hover:text-[#002F34]'>About EMPG</li>
             <li className='hover:text-[#002F34]'>Olx Blog</li>
             <li className='hover:text-[#002F34]'>Contact us</li>
             <li className='hover:text-[#002F34]'>Olx for Buisseness</li>
         </ul>
     </div>

     <div>
         <h1 className=' text-sm font-bold text-[#002F34] '>OLX</h1>
         <ul className=' flex  flex-col text-sm text-gray-500 '>
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
   <li className='h-6 w-6 bg-gray-100 rounded-full border-2 border-gray-400'> <FaFacebookF 
   className='h-4 w-6 text-gray-500 pt-1
    pr-1'/></li>
     <li  className='h-6 w-6 bg-gray-100 rounded-full border-2 border-gray-400'> 
          <AiOutlineTwitter className='h-4 w-6 text-gray-500 pt-1
    pr-1'/></li>
       <li className='h-6 w-6 bg-gray-100 rounded-full border-2 border-gray-400'>   
        <BsFillPlayFill className='h-6 w-6 text-gray-500 pb-1
    pr-1 pl-[2px]'
    /></li>
        <li className='h-6 w-6 bg-gray-100 rounded-full border-2 border-gray-400'>  
         <FiInstagram className='h-4 w-6 text-gray-500 pt-1
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

<div className='bg-[#002F34] text-[#FFFFFF] text-sm font-bold flex p-6 flex-row-reverse w-[1340px]'>
   . © 2006-2022 OLX <p className='font-bold '> Free Classifieds in Pakistan  </p>
</div>
</>
  )
}

export default Footer