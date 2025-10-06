import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Collapse} from 'react-collapse';
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Switch from '@mui/material/Switch';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; 



const ProductSlideBar = () => {
 
  const[filterOpen, setfilterOpen] = useState(true);
  const[isopen, setIsopen] = useState(true);
  const[SizeOpen, setSizeOpen] = useState(true);

  return (
    <aside className="sidebar">
     <h1 className="mb-3 text-[20px] font-[600] flex items-center pr-5">Filter
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setfilterOpen(!filterOpen)}>
           {
            filterOpen === true ? <FaAngleUp />: <FaAngleDown  />
           } 
           
          </Button>
      </h1>
         <Collapse isOpened={ filterOpen}>
         {/** -----------Category---------------------  */}
        <div className="box-category">
        <h3 className="mb-1 text-sm font-[550] flex items-center pr-5">Shop By Category
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setIsopen(!isopen)}>
           {
            isopen === true ? <FaAngleUp />: <FaAngleDown  />
           } 
            </Button>
        </h3>
        <Collapse isOpened={ isopen}>
        <div className="scroll">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Tufted"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Shaggy"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Concord"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="hetset"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Knotted"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="BCF"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Irani"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="turkish"
            className="w-full"
          />
        </div>
        </Collapse>
        </div>

              {/** -----------Price slider---------------------  */}
        <div className="box-price pt-2 ">
          <h3 className="mb-1 text-sm font-[550] flex items-center pr-5">FILTER BY PRICE</h3>
             <RangeSlider />
            <div className="flex pt-2 pb-2 priceRange">
              <span className="text-[13px]">
                From:<strong className="text-dark">Rs:{100}</strong>
              </span>
              <span className="ml-5 text-[13px]">
                From:<strong className="text-dark">Rs:{100000}</strong>
              </span>
            </div>
       </div>
        {/** -----------stocks---------------------  */}
         <div className="box-stock pt-2 ">
          <h3 className="mb-1 text-sm font-[550] flex items-center pr-5">Availability</h3>
           <FormControlLabel control={<Switch/>} label=" In Stock Only (23344)" />
       </div>

       {/** -----------Sizes---------------------  */}
        <div className="box-size">
        <h3 className="mb-1 text-sm font-[550] flex items-center pr-5">Size in Feet
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setSizeOpen(!SizeOpen)}>
           {
            SizeOpen === true ? <FaAngleUp />: <FaAngleDown  />
           } 
            </Button>
        </h3>
        <Collapse isOpened={ SizeOpen}>
        <div className="scroll">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="2x6"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="3x5"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="4x6"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="5x7"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="6x8"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="6x9"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="7x10"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="8x11"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="9x12"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="12x15"
            className="w-full"
          />
        </div>
        </Collapse>
        </div>

           {/** -----------Color---------------------  */}
        <div className="box-size">
        <h3 className="mb-1 text-sm font-[550] flex items-center pr-5">Color
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-black" onClick={()=>setSizeOpen(!SizeOpen)}>
           {
            SizeOpen === true ? <FaAngleUp />: <FaAngleDown  />
           } 
            </Button>
        </h3>
        <Collapse isOpened={ SizeOpen}>
        <div className="scroll">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Back Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="White Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Yellow Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Blue Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Nevyblue Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Red Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Brown Color"
            className="w-full"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Mustured Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Sky-blue Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Beige Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Green Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Silver Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Ivory Color"
            className="w-full"
          />
           <FormControlLabel
            control={<Checkbox size="small" />}
            label="Multi-color"
            className="w-full"
          />
        </div>
        </Collapse>
        </div>
      </Collapse>
      
    </aside>
  );
};

export default ProductSlideBar;
