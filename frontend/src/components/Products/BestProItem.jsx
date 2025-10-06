import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { MdZoomOutMap } from "react-icons/md";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import  {MyContext}  from "../../Context/MyContext"; 
import { useContext } from "react";

const BestProItem = () => {


  const context = useContext(MyContext);

  return (
    <div className="productItem rounded-lg overflow-hidden border-2 border-[rgba(0,0,0,0.1)]  cursor-pointer ">
      <div className=" group imagewrapper w-[100%] h-[220px] overflow-hidden rounded-md relative">
          <Link to='/'>
        <div className="img h-[220px] overflow-hidden ">
        <img
          src="https://carpetplanet.in/cdn/shop/files/IMG_4750.jpg?crop=center&height=375&v=1752323224&width=300"
          className="w-full"
        />
         <img
          src="https://carpetplanet.in/cdn/shop/files/IMG_4765.jpg?crop=center&height=350&v=1752323225&width=280"
          className="w-full absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-0 "
        />
        </div>
        </Link>

        <span className="flex items-center absolute top-[9px] left-[9px] z-50 text-white bg-orange-500 rounded-lg  p-1 text-[15px] text-bold">
          50%
        </span>

        <div className="action absolute top-[-200px] right-[9px] z-50 flex flex-col items-center gap-2 group-hover:top-[9px] transition-all duration-600">
          <Tooltip title="zoom" placement="left-start">
          <Button onClick={()=>context.setOpenProductDetailMode(true)} className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-orange-500 hover:text-white group">
            <MdZoomOutMap className="!text-black !text-[18px] group-hover:text-white hover:!text-white" />
          </Button>
           </Tooltip>
           <Tooltip title="save" placement="left-start">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-orange-500 hover:text-white group">
            <FaRegHeart className="!text-black text-[18px] group-hover:text-white hover:!text-white" />
          </Button>
          </Tooltip>
         
        </div>
      </div>
      <div className="info p-3">
        <h6 className="text-[14px]  font-[500]">
          <Link to="/" className="link  ">
            Fable Irregular Hand Tufted Carpet
          </Link>
        </h6>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4 ">
          <span className="oldprice line-through text-[14px]">Rs.34,998</span>
          <span className="oldprice text-orange-700 font-bold text-[14px]">
            Rs.17,499
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestProItem;
