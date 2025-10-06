import React, { useState } from 'react'
import OtpBox from '../components/OtpBox'
import { Button } from '@mui/material';

const Verify = () => {

  const [otp ,setOtp] = useState();
  const  handleOtpChange= (value)=>{
    setOtp(value)
  }

  const verifyOtp=(e)=>{
    e.preventDefault();
    alert(otp);
  }
  return (
   <section className="section py-10">
         <div className="container">
           <div className="card shadow-md w-[400px] mx-auto rounded-md  bg-gray-200 p-4">
             <div className="text-black text-[18px] flex items-center justify-center gap-3 text-center font-[500]">
              <div className="text-center">
                <img className='w-[60px]' src='email.png'/>
              </div>
            <h3 className='text-center text-[20px] text-black'>  Verify Otp</h3>
            </div>

            <p className='text-[14px] text-center mt-4 '>Otp send to <span className='text-[14px] text-orange-400'>naushir@786gmail.com</span></p>

            <form onSubmit={verifyOtp}>
            <OtpBox length={6} onChange={handleOtpChange}/>

            <div className='flex items-center jsutify-center '>
             <Button type='submit' className="!capitalize !text-[15px] !w-full !bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">
                            Verify Otp
                           </Button>
            </div>
            </form>
           </div>
         </div>
       </section>
  )
}

export default Verify