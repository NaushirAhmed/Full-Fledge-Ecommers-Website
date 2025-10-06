import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegImages } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { FaProductHunt } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { useState } from "react";

const SideBar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      return setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  return (
    <div className="w-[20%] h-full fixed top-0 left-0 bg-[#fff] border-r border-[rgba(0,0,0,0.1)] py-2 px-2">
      <div className="py-2 w-full">
        <Link to="/">
          <img className="w-[140px] h-auto" src="/nuravi 2.png" alt="" />
        </Link>
      </div>

      <ul className="mt-4">
        <li>
          <Link to="/">
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <MdOutlineDashboard className="text-[18px] " />
            <span>Dashboard</span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <FaRegImages className="text-[18px] " />
            <span>HomeSlider</span>
            <span  onClick={() => openSubmenu(1)} className="ml-auto w-[30px] h-[30px] flex items-center  justify-center">
              <FaAngleDown className={`${submenuIndex === 1 ? "rotate-180" : ""}`} />
            </span>
          </Button>

           <Collapse isOpened={submenuIndex === 1 ? true : false}>
            <ul className="w-full mt-2">
              <li className="w-full">
                <Link to="/homeslider/homeslide">
                <Button className="w-full !pl-12 !font-[500]  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                  Home Slide
                </Button>
                </Link>
              </li>
               <li className="w-full">
                <Link to="/homeslider/homesbanner">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                  home bannner
                </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to="/orders">
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <IoBagCheck className="text-[18px] " />
            <span>Orders</span>
          </Button>
          </Link>

        </li>
        <li>
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <FaProductHunt className="text-[18px] " />
            <span>Products</span>
            <span
              onClick={() => openSubmenu(2)}
              className="ml-auto w-[30px] h-[30px] flex items-center  justify-center"
            >
              <FaAngleDown className={`${submenuIndex === 2 ? "rotate-180" : ""}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 2 ? true : false}>
            <ul className="w-full mt-2">
              <li className="w-full">
                <Link to="/products/list">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                  List Products
                </Button>
                </Link>
              </li>
              
              <li className="w-full">
                <Link to="/products/add">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                  Add Products
                </Button>
                </Link>
              </li>

            </ul>
          </Collapse>
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <BiCategory className="text-[18px] " />
            <span>Categories</span>
            <span  onClick={() => openSubmenu(3)} className="ml-auto w-[30px] h-[30px] flex items-center  justify-center">
              <FaAngleDown className={`${submenuIndex === 3 ? "rotate-180" : ""}`} />
            </span>
          </Button>
          <Collapse isOpened={submenuIndex === 3 ? true : false}>
            <ul className="w-full mt-2">
              <li className="w-full">
                <Link to="/categories/list">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                  List Category
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link to="/categories/add">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                      Add  Category
                </Button>
                </Link>
              </li>
              <li className="w-full">
                <Link to="/categories/subcategory/list">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                    List  SubCategory
                </Button>
                </Link>
              </li>

               <li className="w-full">
                <Link to="/categories/subcategory/add">
                <Button className="w-full !font-[500] !pl-12  hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start !text-[rgba(0,0,0,0.7)] ">
                    Add  SubCategory
                </Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li>
          <Link to="/users">
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <LuUsersRound className="text-[18px] " />
            <span>Users</span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className="w-full hover:!bg-[#f4f4f4] !rounded-md !capitalize !justify-start flex gap-3 !text-[16px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center">
            <MdOutlineLogout className="text-[18px] " />
            <span>LogOut</span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
