import React from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MyAccoSideBar = () => {
  return (
    <div className="card bg-gray-200 shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-3 flex items-center justify-center flex-col">
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            className="w-full h-full object-cover"
            src="https://imgs.search.brave.com/wk9VuKhXQ7Ld4qid8hlbEzTSYWnbzMASiz1G2liwYKo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naC0x/MDA4MjEtaW5kaWFu/LWJhYnktZ2lybC1u/YW1lcy0xNjM0MTU1/MDQ4LnBuZz9jcm9w/PTAuODg4ODg4ODg4/ODg4ODg5eHc6MXho/O2NlbnRlcix0b3Am/cmVzaXplPTEyMDA6/Kg"
            alt="Profile"
          />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>

        <h4>Naushir Ahmed</h4>
      </div>

      <ul className="list-none pb-5 myaccount">
        <li className="w-full">
          <NavLink to="/my-account" activeclassname="isActive">
            <Button className="!w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <FaRegUser className="text-[17px]" /> My Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to="/my-orders" activeclassname="isActive">
            <Button className="!w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <IoBagCheckOutline className="text-[17px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" activeclassname="isActive">
            <Button className="!w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <IoMdHeartEmpty className="text-[17px]" /> My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <Button className="!w-full !py-2 !text-left !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
            <IoIosLogOut className="text-[17px]" /> LogOut
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MyAccoSideBar;