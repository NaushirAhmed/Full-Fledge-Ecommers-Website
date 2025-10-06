import { Button } from "@mui/material";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[200px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.3)] pb-2">
          <div className="img w-[30%] group">
            <Link  to='/products/8122'>
            <img src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?v=1755761776&width=800" className="w-full group-hover:scale-105" />
            </Link>
          </div>

          <div className=" info w-full relative">
            <h4 className=" link w-[200px] text-[14px] font-[500] overflow-hidden">
              <Link to='/products/8122'>
              Hewana Shaggy Carpet & Rug jshdhq qms qhdqh
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty :<span>2</span>
              </span>
              <span className="text-gray-700 font-bold">
                Price :Rs. 2,899.00
              </span>
              <MdOutlineDeleteOutline className="absolute top-[20px] right-[0px] text-[20px] rounded-full bg-gray-100 cursor-pointer link" />
            </p>
          </div>
        </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.3)] pb-2">
          <div className="img w-[30%] group">
            <Link  to='/products/8122'>
            <img src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?v=1755761776&width=800" className="w-full group-hover:scale-105" />
            </Link>
          </div>

          <div className=" info w-full relative">
            <h4 className=" link w-[200px] text-[14px] font-[500] overflow-hidden">
              <Link to='/products/8122'>
              Hewana Shaggy Carpet & Rug jshdhq qms qhdqh
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty :<span>2</span>
              </span>
              <span className="text-gray-700 font-bold">
                Price :Rs. 2,899.00
              </span>
              <MdOutlineDeleteOutline className="absolute top-[20px] right-[0px] text-[20px] rounded-full bg-gray-100 cursor-pointer link" />
            </p>
          </div>
        </div>
          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.3)] pb-2">
          <div className="img w-[30%] group">
            <Link  to='/products/8122'>
            <img src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?v=1755761776&width=800" className="w-full group-hover:scale-105" />
            </Link>
          </div>

          <div className=" info w-full relative">
            <h4 className=" link w-[200px] text-[14px] font-[500] overflow-hidden">
              <Link to='/products/8122'>
              Hewana Shaggy Carpet & Rug jshdhq qms qhdqh
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty :<span>2</span>
              </span>
              <span className="text-gray-700 font-bold">
                Price :Rs. 2,899.00
              </span>
              <MdOutlineDeleteOutline className="absolute top-[20px] right-[0px] text-[20px] rounded-full bg-gray-100 cursor-pointer link" />
            </p>
          </div>
        </div>

          <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.3)] pb-2">
          <div className="img w-[30%] group">
            <Link  to='/products/8122'>
            <img src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?v=1755761776&width=800" className="w-full group-hover:scale-105" />
            </Link>
          </div>

          <div className=" info w-full relative">
            <h4 className=" link w-[200px] text-[14px] font-[500] overflow-hidden">
              <Link to='/products/8122'>
              Hewana Shaggy Carpet & Rug jshdhq qms qhdqh
              </Link>
            </h4>
            <p className="flex items-center gap-5">
              <span>
                Qty :<span>2</span>
              </span>
              <span className="text-gray-700 font-bold">
                Price :Rs. 2,899.00
              </span>
              <MdOutlineDeleteOutline className="absolute top-[20px] right-[0px] text-[20px] rounded-full bg-gray-100 cursor-pointer link" />
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="bottomSec absolute bottom-[15px] left-[10px] w-full">
      <div className="bottomInfo w-full pt-3 px-4  border-t border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
        <div className="flex items-center  justify-between w-full">
          <span className="text-[14px] font-[600]">1 item</span>
          <span className="text-gray-700 font-bold"> Rs. 2,899.00</span>
        </div>

        <div className="flex items-center  justify-between w-full">
          <span className="text-[14px] font-[600]">Shipping </span>
          <span className="text-gray-700 font-bold">Rs. 00</span>
        </div>
      </div>
      <br />
      <div className="bottomInfo w-full  px-4  border-t border-[rgba(0,0,0,0.2)] flex items-center justify-between flex-col">
        <div className="flex items-center  justify-between w-full">
          <span className="text-[14px] font-[600]">Total (tax exl.)</span>
          <span className="text-gray-700 font-bold"> Rs. 2,899.00</span>
        </div>


        <div className="flex items-center justify-between w-full gap-5 ">
         <Link to='/cart' className="w-[50%]"><Button className="!w-full !bg-gray-300 !text-black !rounded-md gap-2 !mt-4  hover:!bg-red-500">
            <MdOutlineShoppingCart className="text-[22px]" />
            Add to Cart
          </Button>
          </Link> 
          <Link to='/checkOut' className="w-[50%]"> <Button className="!capitalize w-full !text-[15px] !bg-none !text-gray-800 !rounded-md gap-2 !mt-4 hover:!bg-black hover:!text-white hover:!border-none !border !border-gray-800">
             Checkout
          </Button>
          </Link> 
        </div>
      </div>
      </div>
    </>
  );
};

export default CartPanel;
