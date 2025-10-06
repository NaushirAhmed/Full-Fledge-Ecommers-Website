import React from "react";
import Title from "../components/Title";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoBagCheck } from "react-icons/io5";

const CheckOut = () => {
  return (
    <section className="py-10">
      <Title text1={"CheckOut Your Order"} />
      <div className=" container flex gap-5 ">
        <div className="col1 w-[70%]">
          <div className="card bg-gray-200  shadow-md p-5 rounded-md w-full">
            <h1 className=" text-[18px] font-bold">Billing Details</h1>

            <form className="w-full mt-5">
              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    id="Full name"
                    label="Full Name*"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    id="Email"
                    type="email"
                    label="Email*"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <h4 className="text-[14px] font-[350] pb-3">Street Address*</h4>
              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    id="Street"
                    label="House Number And Street Name*"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    id="Street"
                    label="Apartment ,suite,unit etc (optional)"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    id="City"
                    label="City*"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    id="State"
                    type="text"
                    label="State*"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h4 className="text-[14px] font-[350] pb-3">
                Postcode / ZipCode*
              </h4>
              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    id="ZipCode"
                    label="ZipCode*"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <h4 className="text-[14px] font-[350] pb-3">Phone Number*</h4>
              <div className="flex items-center gap-3 pb-4">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    id="PhoneNumber"
                    label="Phone Number*"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col2  w-[30%]">
          <div className="card shadow-md p-5 bg-gray-200 rounded-md ">
            <h2>Your Order</h2>
            <div className=" flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">SubTotal</span>
            </div>

            <div className="scroll w-full max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2 mb-7">
              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3 ">
                  <div className="img w-[50px] h-[50px] rounded-md object-cover overflow-hidden group">
                    <img
                      className="w-full transition-all group-hover:scale-105"
                      src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?crop=center&height=187&v=1755761776&width=150"
                    />
                  </div>

                  <div className="info">
                    <h4 className="w-[120px] text-[12px] overflow-hidden">
                      Hewana Shaggy Carpet & Rug
                    </h4>
                    <span className=" text-[11px] font-[300]">Qty:1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[300]">₹2,899.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3 ">
                  <div className="img w-[50px] h-[50px] rounded-md object-cover overflow-hidden group">
                    <img
                      className="w-full transition-all group-hover:scale-105"
                      src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?crop=center&height=187&v=1755761776&width=150"
                    />
                  </div>

                  <div className="info">
                    <h4 className="w-[120px] text-[12px] overflow-hidden">
                      Hewana Shaggy Carpet & Rug
                    </h4>
                    <span className=" text-[11px] font-[300]">Qty:1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[300]">₹2,899.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3 ">
                  <div className="img w-[50px] h-[50px] rounded-md object-cover overflow-hidden group">
                    <img
                      className="w-full transition-all group-hover:scale-105"
                      src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?crop=center&height=187&v=1755761776&width=150"
                    />
                  </div>

                  <div className="info">
                    <h4 className="w-[120px] text-[12px] overflow-hidden">
                      Hewana Shaggy Carpet & Rug
                    </h4>
                    <span className=" text-[11px] font-[300]">Qty:1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[300]">₹2,899.00</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="part1 flex items-center gap-3 ">
                  <div className="img w-[50px] h-[50px] rounded-md object-cover overflow-hidden group">
                    <img
                      className="w-full transition-all group-hover:scale-105"
                      src="https://carpetplanet.in/cdn/shop/files/71B4qEC2n7L.jpg?crop=center&height=187&v=1755761776&width=150"
                    />
                  </div>

                  <div className="info">
                    <h4 className="w-[120px] text-[12px] overflow-hidden">
                      Hewana Shaggy Carpet & Rug
                    </h4>
                    <span className=" text-[11px] font-[300]">Qty:1</span>
                  </div>
                </div>

                <span className="text-[14px] font-[300]">₹2,899.00</span>
              </div>
            </div>

            <Button className="!capitalize !w-full !rounded-md !text-center !text-black !border-2 !bg-gray-400 hover:!bg-red-500 !gap-2">
              <IoBagCheck className="text-[20px]" />
              <span className="text-[17px] "> Checkout</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
