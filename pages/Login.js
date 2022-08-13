import React from 'react'
import Link from 'next/link'
function Login() {
  return (
    <section className='flex flex-col items-center justify-center my-14 border-2 border-[#002F34]
     mx-[490px] h-[500px] w-96'>
      <div className='flex flex-col items-center '>
         <Link href="/">
      <img className='cursor-pointer' src="https://www.olx.com.pk/assets/iconOLXLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="" />
      </Link>
   <h1 className='text-3xl font-bold text-[#002F34]'>WELCOME TO OLX</h1>
   <p className='font-bold text-md text-[#002F34]'>The trusted community of buyers and sellers.</p>
      </div>
      <div className='flex flex-col space-y-4 '>
      <div className='flex items-center border-2 border-[#002F34] p-2 rounded-md'>
       <img src="https://www.olx.com.pk/assets/iconGoogleLogin_noinline.633b1f5afb5219bedca01d2367642a28.svg" alt=""
       />
       <h1>Continue With Google</h1>
    </div>
    <div className='flex items-center border-2 border-[#002F34] p-2 rounded-md'>
    <img src="https://www.olx.com.pk/assets/iconFacebookLogin_noinline.70f71af03bbf63ca01a044ff5c5eb342.svg" alt=""
       />
       <h1>Continue With Faccebook</h1>
    </div>
    <div className='flex items-center border-2 border-[#002F34] p-2 rounded-md'>
    <img src="https://www.olx.com.pk/assets/iconMailLogin_noinline.248b2cbda65d833f5f8f87f18a346cc9.svg" alt=""
       />
       <h1>Continue With Email</h1>
    </div>
    <div className='flex items-center border-2 border-[#002F34] p-2 rounded-md'>
    <img src="https://www.olx.com.pk/assets/iconPhoneLogin_noinline.4dcd5ec6754daea7e5c3db60df33309c.svg" alt=""
       />
       <h1>Continue With Phone</h1>
    </div>
    
      </div>
      <div>
          <h2>By continuing, you are accepting</h2>
          <h1 className='text-blue-700'>OLX Terms of use and Privacy Policy</h1>
          </div>    </section>
  )
}

export default Login
