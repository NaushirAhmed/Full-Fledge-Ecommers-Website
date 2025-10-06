import React from "react";
import { Link, Links } from "react-router-dom";
import { Button } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
import { MyContext } from "../../Context/MyContext";
import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  const context = useContext(MyContext);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      vertical: "top",
      horizontal: "right",
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex items-center container  justify-between">
        <div className="col1 mx-10 w-[20%]">
          <Link to={"/"}>
            <img className="w-35" src="/nuravi 2.png" alt="Nuravi Logo" />
          </Link>
        </div>
        <div className="col2 w-[45%] p-2">
          <div className="searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
            <input
              type="text"
              placeholder="Search for product"
              className="w-full h-[35px] focus:outline-none bg-inherit px-2 text-[15px] "
            />
            <Button className="!absolute top-[8px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
              <CiSearch className="text-black text-[22 px] " />
            </Button>
          </div>
        </div>
        <div className="col3 w-[35%] flex items-center pl-7">
          <ul className="flex items-center justify-end w-full gap-3">
            {context.isLogin === false ? (
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
            ) : (
              <>
                <Button
                  onClick={handleClick}
                  className="myAccountWrap !flex !text-black items-center gap-3  cursor-pointer"
                >
                  <FaRegUser className="text-[rgba(0,0,0,0.7)] text-[20px]" />

                  <div className="info flex flex-col capitalize">
                    <h4 className="leading-3 text-[13px] font-bold mb-0 text-left justify-start">
                      Naushir Ahmed
                    </h4>
                    <span className="text-[12px] mt-0 text-left justify-start ">
                      nauhsirmdh786@gmal.com
                    </span>
                  </div>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <Link to='/my-account'>
                  <MenuItem onClick={handleClose} className="flex  gap-2 !py-2">
                    <FaRegUser className="text-[18px]" /> <span className="text-[14px]">My Account</span>
                  </MenuItem>
                  </Link>

                  <Link to='/orders'>
                  <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                    <IoBagCheckOutline className="text-[18px]" />  <span className="text-[14px]">Orders</span>
                  </MenuItem>
                  </Link>

                  <Link to='/my-list'>
                  <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                    <IoMdHeartEmpty className="text-[18px]" /> <span className="text-[14px]">Mylist</span>
                  </MenuItem>
                  </Link>

                  <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                    <IoIosLogOut className="text-[18px]" /> <span className="text-[14px]">Logout</span>
                  </MenuItem>
                  
                </Menu>
              </>
            )}

            <li>
              <Tooltip title="whishlist">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={1} color="secondary">
                    <FaRegHeart className="text-[20px]" />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Cart">
                <IconButton
                  onClick={() => context.setOpenCart(true)}
                  aria-label="cart"
                >
                  <StyledBadge badgeContent={1} color="secondary">
                    <MdOutlineShoppingCart className="text-[20px]" />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Navbar;
