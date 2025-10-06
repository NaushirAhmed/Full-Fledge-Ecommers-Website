import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { Button } from "@mui/material";
import { IoBagCheck } from "react-icons/io5";
import MyAccoSideBar from "../components/MyAccoSideBar";

import CartItems from "../components/CartItems";


const MyList = () => {
 

  return (
    <section className="min-h-screen py-10 w-full">
      <div className="container flex gap-5">

      <div className="col1 w-[20%]">
        <MyAccoSideBar/>
         </div>

        <div className="col2  w-[70%] ">
          <div className=" bg-gray-200 shadow-md rounded-md">
            <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2> My List</h2>
          <p className="mt-0 mb-2">
            There are <span className="font-bold text-red-600">2</span> products
            in your List
          </p>
          </div>

          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
          <CartItems/>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
