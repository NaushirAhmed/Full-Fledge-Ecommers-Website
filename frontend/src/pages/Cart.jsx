import React from "react";
import { Link } from "react-router-dom";
import { GoTriangleDown } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Title from "../components/Title";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { IoBagCheck } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartItems from "../components/CartItems";


const Cart = () => {
 

  return (
    <section className="section mt-2">
      <Title text1={"Your Cart"} />
      <div className=" ml-10 w-fullm-4 mb-5 flex">
        <div className="left-part w-[60%] ">
          <p className="mt-0 mb-2">
            There are <span className="font-bold text-red-600">2</span> products
            in your cart
          </p>

          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
        </div>

        <div className="right-part items-right w-[40%] py-8 px-6">
          <div className="shadow-md rounded-md bg-gray-200 p-5">
            <h3 className="pb-3">Cart Totals</h3>
            <hr />

            <p className="flex items-center justify-between pt-3">
              <span className="text-[14px] font-[500]">Subtotal</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600">
                Rs. 2,899.00
              </span>
            </p>

            <p className="flex items-center justify-between pt-2 mt-1 border-b border-[rgba(0,0,0,0.2)]">
              <span className="text-[14px] font-[500]">Shipping</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600">
                Free
              </span>
            </p>

            <p className="flex items-center justify-between pt-2">
              <span className="text-[14px] font-[500]">Total</span>
              <span className="text-[14px] font-bold font-[500] text-gray-600 ">
                Rs. 2,899.00
              </span>
            </p>

            <br />
            <Link to='/checkOut'> 
            <Button className="!capitalize !w-full !rounded-md !text-center !text-black !border-2 !bg-gray-400 hover:!bg-red-500 !gap-2">
              <IoBagCheck className="text-[20px]" />
             <span className="text-[17px] "> Checkout</span>
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
