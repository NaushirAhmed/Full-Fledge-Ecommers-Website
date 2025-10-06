import React from "react";
import { useState } from "react";
import ProductSlideBar from "../components/Products/ProductSlideBar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../components/Products/ProductItem";
import { Button } from "@mui/material";
import { IoGrid } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItemList from "../components/Products/ProductItemList";
import Pagination from '@mui/material/Pagination';

const Products = () => {
  const [listView, setListView] = useState("grid")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-5 pb-0 bg-gray-100">
      <div className="breadcrum px-5 mb-5">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className="link">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
            >
              Products
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="bg-white p-5">
        <div className="container flex gap-3">
          <div className="sidebarwrapper w-[20%] h-full bg-white">
            <ProductSlideBar />
          </div>

          <div className="right-content w-[80%] py-3">
            <div className="bg-[#f1f1f1] pt-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-3 listaction">
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${listView === 'list' && "active"}`} onClick={()=>setListView("list")}>
                  <LuMenu />
                </Button>
                <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${listView === 'grid' && "active"}`} onClick={()=>setListView("grid")}>
                  <IoGrid />
                </Button>
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)] ">
                  There are 27 Products..
                </span>
              </div>

              <div className="col2 m-2  flex items-center justify-end gap-1 ">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)] ">
                  Sort By:
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-gray-200 !text-black !capitalize !rounded-md"
                >
                  Relevance
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Relevance</MenuItem>
                  <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                  <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                </Menu>
              </div>
            </div>
            <div className={`grid ${listView === 'grid' ? 'grid-cols-4 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-1'} gap-4`}>
              {
                listView=== "grid" ? 
                <>
               <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              </>
              :
              <>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              <ProductItemList/>
              </>
              }
             
            </div>
            <div className="flex items-center justify-center mt-10">
               <Pagination count={10}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
