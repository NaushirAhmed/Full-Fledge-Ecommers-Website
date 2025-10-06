import React from 'react'
import { useState } from 'react';
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const ProductDetailComponent = () => {

    const [productSize, setProductSize] = useState(null);
  return (
    <>
     <h1 className=" text-[25px] font-[500]">
              Huglux Shaggy Carpet & Rug hggugugugug hugugu jhuhuu{" "}
            </h1>
            <span className="text-[15px]">
              by{" "}
              <Link
                href="/"
                className="!text-[18px]  !text-black link cursor-pointer"
              >
                Nuravi
              </Link>
            </span>
            <div className="flex items-center  gap-2">
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="flex items-center gap-1 ">
                ({4})<p>reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-4 ">
              <span className="oldprice line-through text-[25px]">
                Rs.34,998
              </span>
              <span className="oldprice text-orange-700 font-bold text-[25px]">
                {" "}
                Rs.17,499
              </span>
              <div className="w-[60px] h-[25px] bg-gray-300 text-[500] text-center">
                50% off
              </div>
            </div>
            <span className="text-[14px]">
              Available in stock:{" "}
              <span className="text-green-700 text-[14px] font-bold">
                147 items
              </span>
            </span>
            <div className="flex flex-col  gap-1 pt-2">
              <span className="text-[18px]">Size in Feet</span>
              <div className=" flex items-center grid grid-cols-5  gap-2">
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 0 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(0)}
                >
                  2x6
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 1 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(1)}
                >
                  3x5
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 2 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(2)}
                >
                  4x6
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 3 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(3)}
                >
                  5x7
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 4 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(4)}
                >
                  6X8
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 5 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(5)}
                >
                  6x9
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 6 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(6)}
                >
                  7x10
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 7 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(7)}
                >
                  9x12
                </Button>
                <Button
                  className={`!min-w-[60px] !border-1 !border-[#000] !text-black ${
                    productSize === 8 ? "!bg-gray-400 text-white" : ""
                  }`}
                  onClick={() => setProductSize(8)}
                >
                  12x15
                </Button>
              </div>
            </div>

            <div className=" flex items-center gap-3 ">
              <div className="quatboxwrapper w-[70px] mt-4">
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  className="w-full h-[30px] p-2 text-[15px] focus:outline-none border border-black rounded-md  "
                />
              </div>
              <Button className="!bg-gray-300 !text-black !rounded-md gap-2 !mt-4  hover:!bg-red-500">
                <MdOutlineShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center py-2 gap-2">
              <span className="flex items-center gap-2 text-[16px] link cursor-pointer">
                <FaRegHeart /> Add to Wishlist
              </span>
            </div>

    </>
  )
}

export default ProductDetailComponent