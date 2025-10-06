import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductsZoom from "../components/Products/ProductsZoom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Title from "../components/Title";
import BestSellerSlider from "../components/Sliders/bestSellerSlider";
import ProductDetailComponent from "../components/Products/ProductDetailComponent";

const ProductsDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-1 bg-gray-200">
        <div className="breadcrum px-5 mb-5 pt-5">
          <div role="presentation pl-4">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/" className="link">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                className="link"
                href="/products"
              >
                Products
              </Link>
              <Link underline="hover" color="inherit">
                ProductsDetails
              </Link>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 pt-4">
        <div className="container flex gap-10 ">
          <div className="productzoomcontainer w-[45%]">
            <ProductsZoom />
          </div>
          <div className="productcontainer w-[55%] pr-6 pl-10">
           <ProductDetailComponent/>
          </div>
        </div>

        <div className="extainfo container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`link text-[17px] cursor-pointer font-[400] ${
                activeTab == 0 ? "text-orange-500" : ""
              }`}
              onClick={() => setActiveTab(0)}
            >
              Descrition
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[400] ${
                activeTab == 1 ? "text-orange-500" : ""
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product detail
            </span>
            <span
              className={`link text-[17px] cursor-pointer font-[400] ${
                activeTab == 2 ? "text-orange-500" : ""
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (4)
            </span>
          </div>
          {activeTab === 0 && (
            <div className=" shadow-md  w-full p-5 rounded-md bg-white border border-black ">
              <p>
                Transform your space with the futuristic charm of the Sahgyy
                3D-Designed. Crafted using cutting-edge 3D design technology,
                this piece offers both visual impact and practical use. Whether
                you're upgrading your office, decorating a shelf, or gifting a
                friend with a taste for innovation, the Sahgyy product delivers
                style and substance. Lightweight, durable, and uniquely
                eye-catching, it blends seamlessly into any modern aesthetic
                while standing out as a conversation piece. Designed for those
                who appreciate art, function, and thoughtful design in everyday
                life.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className=" shadow-md  w-full p-5 rounded-md bg-white">
              <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <tbody>
                    <tr class="bg-white border-b dark:bg-white border-black border-t">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap "
                      >
                        Material
                      </th>
                      <td class="px-6 py-4 text-black">Cotton</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap "
                      >
                        Pile Height
                      </th>
                      <td class="px-6 py-4 text-black">2-inch</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap "
                      >
                        Construction Type
                      </th>
                      <td class="px-6 py-4 text-black">Handmade</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Color
                      </th>
                      <td class="px-6 py-4 text-black">ivory</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Style
                      </th>
                      <td class="px-6 py-4 text-black">Modern</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Number of Pieces
                      </th>
                      <td class="px-6 py-4 text-black">1</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-white  border-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-black whitespace-nowrap"
                      >
                        Product Care Instructions
                      </th>
                      <td class="px-6 py-4 text-black">Dry Clean Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className=" shadow-md  w-[80%] p-5 mb-5  rounded-md bg-white border border-black ">
              <div className="w-full productReviewsContainer">
                <h2>Reviews </h2>

                <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5 ">
                  <div className="review pt-5 pb-5 border-b border-gray-400 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/9YglWkfU1rerWNHDM0wnX3xEFXAQwrPAbyEoAGKi8FE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzE0LmpwZz9z/c2w9MQ"
                          alt="profile"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinky Yadav</h4>
                        <h5 className="text-[13px] mb-0">2024-06-03</h5>
                        <p className="mt-0 mb-0 text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat ex dignissimos dolor explicabo,
                          necessitatibus nostrum cupiditate consequatur
                          distinctio accusamus provident.{" "}
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-400 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/9YglWkfU1rerWNHDM0wnX3xEFXAQwrPAbyEoAGKi8FE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzE0LmpwZz9z/c2w9MQ"
                          alt="profile"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinky Yadav</h4>
                        <h5 className="text-[13px] mb-0">2024-06-03</h5>
                        <p className="mt-0 mb-0 text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat ex dignissimos dolor explicabo,
                          necessitatibus nostrum cupiditate consequatur
                          distinctio accusamus provident.{" "}
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-400 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/9YglWkfU1rerWNHDM0wnX3xEFXAQwrPAbyEoAGKi8FE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzE0LmpwZz9z/c2w9MQ"
                          alt="profile"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinky Yadav</h4>
                        <h5 className="text-[13px] mb-0">2024-06-03</h5>
                        <p className="mt-0 mb-0 text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat ex dignissimos dolor explicabo,
                          necessitatibus nostrum cupiditate consequatur
                          distinctio accusamus provident.{" "}
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-400 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/9YglWkfU1rerWNHDM0wnX3xEFXAQwrPAbyEoAGKi8FE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzE0LmpwZz9z/c2w9MQ"
                          alt="profile"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinky Yadav</h4>
                        <h5 className="text-[13px] mb-0">2024-06-03</h5>
                        <p className="mt-0 mb-0 text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat ex dignissimos dolor explicabo,
                          necessitatibus nostrum cupiditate consequatur
                          distinctio accusamus provident.{" "}
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>

                  <div className="review pt-5 pb-5 border-b border-gray-400 w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://imgs.search.brave.com/9YglWkfU1rerWNHDM0wnX3xEFXAQwrPAbyEoAGKi8FE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzE0LmpwZz9z/c2w9MQ"
                          alt="profile"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Rinky Yadav</h4>
                        <h5 className="text-[13px] mb-0">2024-06-03</h5>
                        <p className="mt-0 mb-0 text-[14px]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat ex dignissimos dolor explicabo,
                          necessitatibus nostrum cupiditate consequatur
                          distinctio accusamus provident.{" "}
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>

                <br />

                <div className="reviewsform bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a Review</h2>
                  <form className="w-full mt-5 ">
                    <TextField
                      id="outlined-multiline-static"
                      label="Write a review"
                      multiline
                      rows={5}
                      className="w-full"
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} size="large" />

                    <div className="flex items-center mt-5">
                     <Button className="!bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-7 pb-6 ">
          <Title text1={"Related Products"}/> 
          <BestSellerSlider items={5}/>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;
