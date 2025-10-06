import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] mx-auto rounded-md  bg-gray-200 p-4">
          <h3 className="text-black text-[18px] text-center font-[500]">
            Register with a new account
          </h3>

          <form className="w-full mt-5">
            <div className="form-control mb-5">
              <TextField
                id="Name"
                label="Full Name"
                variant="outlined"
                size="small"
                className="w-full"
              />
            </div>
            <div className="form-control mb-5">
              <TextField
                id="email"
                label="Email Id *"
                variant="outlined"
                size="small"
                className="w-full"
              />
            </div>
            <div className="form-control mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                variant="outlined"
                size="small"
                className="w-full"
              />
              <Button
                onClick={() => setShowPassword(!showPassword)}
                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
              >
                {showPassword === false ? (
                  <FaRegEye className="text-[20px] opacity-75" />
                ) : (
                  <FaRegEyeSlash className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            
            <div className="flex items-center justify-center w-full mb-3">
              <Button className="!capitalize !text-[15px] !w-full !bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">
                Register
              </Button>
            </div>

            <p className="text-center ">Already have a account?  <Link to='/login' className="link text-[16px] text-red-500 font-[600]">Login</Link></p>

            <p className="text-center font-[300] ">Or Continue with Social Account</p>

            <Button className="!capitalize !w-full !bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">
                <FcGoogle className="text-[20px]"/> Login with google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
