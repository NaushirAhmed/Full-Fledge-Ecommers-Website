import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button } from "@mui/material";

const ForgotPassword = () => {
    
    const [showPassword, setShowPassword] = useState(false);
     const [showPassword2, setShowPassword2] = useState(false);

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] mx-auto rounded-md  bg-gray-200 p-4">
          <h3 className="text-black text-[18px] text-center font-[500]">
            Set new Password
          </h3>

          <form className="w-full mt-5">
            <div className="form-control mb-5 relative">
             <TextField
                type={showPassword === false ? "password" : "text"}
                id="New password"
                label=" New Password"
                variant="outlined"
                size="small"
                className="w-full"
                name="password"
              /> 
              <Button
                onClick={() => setShowPassword(!showPassword)}
                className="!absolute top-[3px] right-[0px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
              >
                {showPassword === false ? (
                  <FaRegEye className="text-[20px] opacity-75" />
                ) : (
                  <FaRegEyeSlash className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>
            <div className="form-control mb-5 relative">
              <TextField
                type={showPassword2 === false ? "password" : "text"}
                id="Confirm password"
                label=" Confirm Password"
                variant="outlined"
                size="small"
                className="w-full"
                name="Confirm-password"
              /> 
              <Button
                onClick={() => setShowPassword2(!showPassword2)}
                className="!absolute top-[3px] right-[0px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
              >
                {showPassword2 === false ? (
                  <FaRegEye className="text-[20px] opacity-75" />
                ) : (
                  <FaRegEyeSlash className="text-[20px] opacity-75" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center w-full mb-3">
              <Button className="!capitalize !text-[15px] !w-full !bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword