import { Button } from '@mui/material'
import { RiMenu2Line } from "react-icons/ri";
import React, { useState } from 'react'
import { FaShippingFast } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Category from './Category';

const Navigation = () => {
   const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel =()=>{
      setIsOpenCatPanel(true);
    }
  return (
    <>
      <nav className='nav'>
      <div className='flex items-center justify-end '>
        <div className='col_1 w-[25%] mx-7'>
        <Button onClick={openCategoryPanel} className='!text-black gap-2'><RiMenu2Line />Shop by Category</Button>
        </div>
        <div className='col_2 w-[50%]'>
            <ul className='flex items-center gap-20'>
                <li className='list-none'>
                    <Link to="/" className='link'>Home</Link>
                </li>
                 <li className='list-none'>
                    <Link to="/products" className='link'>Products</Link>
                </li>
                 <li className='list-none'>
                    <Link to="/about" className='link'>About</Link>
                </li>
                 <li className='list-none'>
                    <Link to="/contact" className='link'>Contact</Link>
                </li>
            </ul>
        </div>
        <div className='col_3 w-[25%] flex items-center gap-3'>
         <p className='flex items-center gap-3 mb-0 mt-0'><FaShippingFast className='text-[20px] '/>Free & Fast Delivery in India</p>
        </div>
      </div>
      </nav>
      <Category  setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel}/>
      </>
  )
}

export default Navigation