import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoIosCloseCircle } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCircleMinus } from "react-icons/fa6";

const Category = (props) => {
   const [opensubmenu, setOpensubmenu] = useState(null);


  const toggleDrawer = (newOpen) => () => { 
    props.setIsOpenCatPanel(newOpen)
  };

  const openmenu =(index)=>{
    if(opensubmenu ===index){
        setOpensubmenu(null)
    }else{
     setOpensubmenu(index);
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="category">
        <h3 className=' flex items-center justify-between p-3 text-[20px] font-[500]'>Shop By Categories<IoIosCloseCircle onClick={toggleDrawer(false)} className='text-[20px] cursor-pointer'/></h3>

     <div className='scroll '>
        <ul className="w-full">
            <li className="list-none flex items-center relative flex-col">
               <Button className='w-full !text-left !justify-start !px-3 !text-black !text-[15px]'>Shop by Shapes</Button>
                 {
                    opensubmenu === 0 ?
                        <FaCircleMinus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={()=>openmenu(0)}  /> :

                        <FaCirclePlus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={()=>openmenu(0)}  />
            }
               
                

                    {
                        opensubmenu == 0 && 
                         <ul className="submenu  w-full pl-3">
                    <li className="list-none mb-">
                       <Link to='/rectangle' className='link w-full !text-left !justify-start !px-3 '>Rectangle</Link> 
                    </li>
                     <li className="list-none mb-">
                       <Link to='/square' className='link w-full !text-left !justify-start !px-3 '>Square</Link> 
                    </li>
                     <li className="list-none mb-">
                       <Link to='/round ' className='link w-full !text-left !justify-start !px-3 '>Round</Link> 
                    </li>
                     <li className="list-none mb-">
                       <Link to='/irregular' className='link w-full !text-left !justify-start !px-3 '>Irregular</Link> 
                    </li>
                </ul>
                    }  

            </li>
            <li className="list-none flex items-center relative pt-2 ">
             <Link to='/tufted' className='h-[30px] font-[500] link w-full text-left justify-start px-3 text-[15px] hover:bg-gray-100 text-[500]'>Shop by Tufted</Link>
            </li>
             <li className="list-none flex items-center relative pt-2 ">
             <Link to='/shaggy' className='h-[30px] font-[500] link w-full text-left justify-start px-3 text-[15px] hover:bg-gray-100 '>Shop By Shaggy</Link>
            </li>
             <li className="list-none flex items-center relative pt-2">
             <Link to='/concord' className='h-[30px] font-[500] link w-full text-left justify-start px-3 text-[15px] hover:bg-gray-100'>Shop By Concored</Link>
            </li>
             <li className="list-none flex items-center relative pt-2">
             <Link to='/bcf' className='h-[30px] font-[500] link w-full text-left justify-start px-3 text-[15px] hover:bg-gray-100'>Shop By BCF</Link>
            </li>
             <li className="list-none flex items-center relative pt-2">
             <Link to='/hetset' className='h-[30px] font-[500] link w-full text-left justify-start px-3 text-[15px] hover:bg-gray-100'>Shop By Hetset</Link>
            </li>
             
        </ul>
        </div>  
   


    </Box>
  );
  return (
     <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default Category