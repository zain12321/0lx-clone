import React from 'react'
import Image from 'next/image'
import { RiHeartLine } from 'react-icons/ri'
import {  MdSpeed } from 'react-icons/md'
import {RiHotelBedLine} from 'react-icons/ri'
import { CgSmartHomeWashMachine} from 'react-icons/cg'
function Services() {

  return (
    <section>
     
         
         <div className='flex mx-16 space-x-1'>
               
           <div className=' pt-1'>
                  <div className='Service rounded-sm'>
                        <p className='pt-32 '><span 
                        className='bg-[#FFCE32] text-[#002F34] p-1 rounded px-4 mx-2'>Fetured</span></p>
                  </div>
             <div className=''>
                 <div className='border-l-[6px] border-l-[#FFCE32]  border-b-2 border-r-2 border-gray-300
                  rounded-br-md
                 rounded-bl-md w-[300px] mb-9'>
                 <div className='flex justify-between pt-2'>
                     <h1 className='pl-4 text-lg'>New Maachine 2018</h1>
                     <RiHeartLine className='h-6 text-gray-800 w-8 '/>
                 </div>
                 <div className='flex flex-col pl-4'>
                     <h1 className=' text-xl font-bold pt-2'>RS 50,540,00</h1>
                     <p className='flex items-center text-[#002F34] pt-4'><MdSpeed/> 93,000 Km 2014</p>
                     <desc className='text-sm'>Lhore Medicl Socity Lahore, 3 days a...</desc>
                 </div>
                 </div>
             </div>

           </div>

           <div className='pl-1 pt-1'>
                  <div className='Bed rounded-sm'>
                        <p className='pt-32 '><span
                         className='bg-[#FFCE32] text-[#002F34] p-1 rounded px-4 mx-2'>Fetured</span></p>
                  </div>
             <div className=''>
                 <div className='border-l-[6px] border-l-[#FFCE32]  border-b-2 border-r-2 border-gray-300
                  rounded-br-md
                 rounded-bl-md w-[296px] mb-9'>
                 <div className='flex justify-between pt-2'>
                     <h1 className='pl-4 text-md'>AUVON AS8012 Tens and...<br/>
                     Muscale Simulator Pain Relief</h1>
                     <RiHeartLine className='h-6 text-gray-800 w-8 '/>
                 </div>
                 <div className='flex flex-col pl-4'>
                     <h1 className=' text-xl font-bold pt-2'>RS 18,699</h1>
                    
                     <desc className='text-sm pt-5'>Hill Park, Karachi 2 Weeks ago</desc>
                 </div>
                 </div>
             </div>

           </div>


           <div className='pl-1 pt-1'>
                  <div className='Machine rounded-sm'>
                        <p className='pt-32 '><span className='bg-[#FFCE32] text-[#002F34] p-1 rounded px-4 mx-2'>Fetured</span></p>
                  </div>
             <div className=''>
                 <div className='border-l-[6px] border-l-[#FFCE32]  border-b-2 border-r-2 border-gray-300
                  rounded-br-md
                 rounded-bl-md w-[300px] mb-9'>
                 <div className='flex justify-between pt-1'>
                     <h1 className='pl-4 text-md'>Prime Location Upper Portion
                     <br/>For Rent In l-11/12</h1>
                     <RiHeartLine className='h-6 text-gray-800 w-8 '/>
                 </div>
                 <div className='flex flex-col pl-4'>
                     <h1 className=' text-xl font-bold pt-1'>RS 125,600</h1>
                     <desc className='text-sm pt-[6px]'>DHA 7  Lahore 0 Minuets ago</desc>
                     <desc className='text-sm'>Lhore Medicl Socity Lahore, 3 days a...</desc>
                 </div>
                 </div>
             </div>

           </div>


           <div className='pl-1 pt-1'>
                  <div className='Watch rounded-sm'>
                        <p className='pt-32 '><span
                         className='bg-[#FFCE32] text-[#002F34] p-1 rounded px-4 mx-2'>Fetured</span></p>
                  </div>
             <div className=''>
                 <div className='border-l-[6px] border-l-[#FFCE32]  border-b-2 border-r-2 border-gray-300
                  rounded-br-md
                 rounded-bl-md w-[300px] mb-9'>
                 <div className='flex justify-between pt-2'>
                     <h1 className='pl-4 text-[15px]'>2 Kanal Prime Location Plot No 1388 <br/>
                     Block X For Sale DHA.....</h1>
                     <RiHeartLine className='h-6 text-gray-800 w-8 '/>
                 </div>
                 <div className='flex flex-col pl-4'>
                     <h1 className=' text-xl font-bold pt-2'>RS 160,000</h1>
                   
                     <desc className='text-sm pt-5'>DHA 7  Lahore 0 Minuets ago</desc>
                 </div>
                 </div>
             </div>

           </div>








         </div>
    </section>
  )
}

export default Services