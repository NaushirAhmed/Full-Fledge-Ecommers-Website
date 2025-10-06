import React from "react";
import MyAccoSideBar from "../components/MyAccoSideBar";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import Badges from "../components/Badges";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";


const MyOrders = () => {
 const [isopenProduct, setIsopenProduct] = useState(null);

  const isShowProduct =(index)=>{
    if(isopenProduct === index){
      return setIsopenProduct(null);
    }else{
      return setIsopenProduct(index);
    }
  }
  return (
    <section className="min-h-screen py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <MyAccoSideBar />
        </div>

        <div className="col2  w-[80%] ">
          <div className=" bg-gray-100 shadow-md rounded-md">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2> My Orders</h2>
              <p className="mt-0 mb-2">
                Only <span className="font-bold text-red-600">2</span> products
                you have Ordered
              </p>
            </div>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-200 dark:text-gray-200">
                <thead className="text-xs text-black uppercase bg-gray-500 dark:bg-gray-500 dark:text-black">
                  <tr>
                    <th> &nbsp;</th>
                    
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      OrderId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      PaymentId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      PinCode
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Total Amount
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      UserId
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Orders Status
                    </th>
                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-black border-b dark:bg-gray-200 dark:border-gray-800 border-gray-200">
                    <td className="px-6 py-4 font-[500]">
                      <Button onClick={()=>isShowProduct(0)} className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full bg-gray-200 text-white cursor-pointer">

                        {
                          isopenProduct === 0 ?  <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" /> :   <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        }
                       
                      </Button>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className="text-red-500">1367262g2yg2t72</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className="text-red-500">khsje2226ghgcd73</span>
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      Naushir Ahmed
                    </td>
                    <td className="px-6 py-4 font-[500]">863626388</td>
                    <td className="px-6 py-4 font-[500]">
                      <span className="block w-[200px]">
                        6b street govindpura bangalore jdwjhd jqdjqhidqi
                        jjahdiqidqkdnq nqdhjiqjidq{" "}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-[500]">560045</td>
                    <td className="px-6 py-4 font-[500]">Rs.34658</td>
                    <td className="px-6 py-4 font-[500]">
                      naushirmdh786@gmail.com
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <span className="text-red-500">121873i1hw17w9</span>
                    </td>
                    <td className="px-6 py-4 font-[500]">
                      <Badges status="cancel" />
                    </td>
                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                      22-01-2025
                    </td>
                  </tr>
                  {
                    isopenProduct === 0 && (
                      <>
                      <tr>
                    <td className="" colSpan={6}>
                        <div className="relative overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
                          <thead className="text-xs text-black uppercase bg-gray-500 dark:bg-gray-500 dark:text-black">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                ProductId
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                Product Title
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                Image
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                Quantity
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                Price
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 whitespace-nowrap"
                              >
                                SubTotal
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white text-black border-b dark:bg-gray-200 dark:border-gray-800 border-gray-200">
                              <td className="px-6 py-4 font-[500]">
                                    <span className="text-red-500">
                                  hquw2221u2232311
                                </span>
                              </td>
                              <td className="px-6 py-4 w-[100px] overflow-hidden font-[500]">
                                  shaggy carpet most popular smkqsijwijdiwjdiwjidjiwjdi2jd wdwnidjwijdowjd
                              
                              </td>
                              <td className="px-6 py-4 font-[500]">
                               <img className="w-[40px] h-[40px] rounded-md object-cover" src="https://cdn.shopify.com/s/files/1/0591/6039/5912/files/71B4qEC2n7L_128x128.jpg?v=1755761776" alt="" />
                              </td>
                              <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                               34658
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                <span className="block w-[200px]">
                                 34658
                                </span>
                              </td>
                            </tr> 

                            <tr className="bg-white text-black border-b dark:bg-gray-200 dark:border-gray-800 border-gray-200">
                              <td className="px-6 py-4 font-[500]">
                                    <span className="text-red-500">
                                  hquw2221u2232311
                                </span>
                              </td>
                              <td className="px-6 py-4 w-[100px] overflow-hidden font-[500]">
                                  shaggy carpet most popular smkqsijwijdiwjdiwjidjiwjdi2jd wdwnidjwijdowjd
                              
                              </td>
                              <td className="px-6 py-4 font-[500]">
                               <img className="w-[40px] h-[40px] rounded-md object-cover" src="https://cdn.shopify.com/s/files/1/0591/6039/5912/files/71B4qEC2n7L_128x128.jpg?v=1755761776" alt="" />
                              </td>
                              <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                1
                              </td>
                              <td className="px-6 py-4 font-[500]">
                               34658
                              </td>
                              <td className="px-6 py-4 font-[500]">
                                <span className="block w-[200px]">
                                 34658
                                </span>
                              </td>
                            </tr> 
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                        </>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
