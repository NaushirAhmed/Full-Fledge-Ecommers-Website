import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Divider from '@mui/material/Divider';
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
     const [myAccountMenu, setmyAccountMenu] = useState(null);
  const openmyAcc = Boolean(myAccountMenu);
  const handleClickmyAcc = (event) => {
    setmyAccountMenu(event.currentTarget);
  };
  const handleClosemyAcc = () => {
    setmyAccountMenu(null);
  };
  return (
    <header className="w-full h-auto pl-54 p-2 pr-7 bg-[#fff] shadow-md flex items-center justify-between">
      <div className="part1">
        <Button className="!w-[40px] !h-[40px] !rounded-full !min-h-[40px] !text-[rgba(0,0,0,0.7)]">
          <RiMenu2Fill className="text-[18px] text-[rgba(0,0,0,0.7)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        <div onClick={handleClickmyAcc} className="rounded-full w-[32px] h-[32px] overflow-hidden cursor-pointer">
            <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/bswKFgcinA7m0xERaYId7KQtMcLY4hXPF6jNm4gwTRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzEyLmpwZz9z/c2w9MQ"/>
        </div>
         <Menu
        anchorEl={myAccountMenu}
        id="account-menu"
        open={openmyAcc}
        onClose={handleClosemyAcc}
        onClick={handleClosemyAcc}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClosemyAcc} className="!bg-white">
        <div className="flex items-center gap-3">
          <div className="rounded-full w-[32px] h-[32px] overflow-hidden cursor-pointer">
            <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/bswKFgcinA7m0xERaYId7KQtMcLY4hXPF6jNm4gwTRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzEyLmpwZz9z/c2w9MQ"/>
        </div>

        <div className=" info">
            <h3 className="text-[15px] font-[500] leading-4">Naushir ahmed</h3>
            <p className="text-[12px] font-[400] opacity-70">naushirmdh786@gmail.com</p>
        </div>
        </div>
        </MenuItem>
        <Divider />
          <MenuItem onClick={handleClosemyAcc} className="flex items-center gap-3">
            <FaRegUser className=""/>
            <span className="text-[14px]">Profile</span>
          </MenuItem>

           <MenuItem onClick={handleClosemyAcc} className="flex items-center gap-3">
            <IoIosLogOut className=""/>
            <span className="text-[14px]">LogOut</span>
          </MenuItem>

       
      </Menu>
      </div>
    </header>
  );
};

export default Header;
