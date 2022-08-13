import React from 'react'
// import Image from 'next/image'
import { RiHeartLine } from 'react-icons/ri'
// import {  MdSpeed } from 'react-icons/md'
// import {RiHotelBedLine} from 'react-icons/ri'
// import { CgSmartHomeWashMachine} from 'react-icons/cg'
function Categories(props) {
// console.log("category props",props)
const {title, featured, image, desc, price} = props
  return (
    <section className=''>
    
         
         <div className='top-10 flex'>
               
           <div className=' '> 
           
                  <div className=' rounded-sm '>
                 
     
     <img className="h-80 w-[600px] sm:h-[162px] sm:w-[300px]" src={image} alt="" />
     <div className=' relative'>
     {featured && 
                        <p className='bg-[#FFCE32] text-[#002F34]  px-4 p-1 rounded absolute
                         bottom-2 left-2'>
                            Fetured
                        
                        </p>
} 
     </div>
                  </div>

             <div className=''>
                 <div className='border-l-[6px] border-l-[#FFCE32]
                   border-b-2 border-r-2 border-gray-300
                  rounded-br-md
                 rounded-bl-md w-[300px] '>
                 <div className='flex justify-between pt-2'>
                     <h1 className='pl-4 text-lg'>{title}</h1>
                     <RiHeartLine className='h-6 text-gray-800 w-8 '/>
                 </div>
                 <div className='flex flex-col pl-4'>
                     <h1 className=' text-xl font-bold '>{price}</h1>
                     
                    <desc className='text-sm'>{desc}</desc>
                 </div>
                 </div>
             </div>

           </div>



         </div> 
    </section>
  )
}

export default Categories