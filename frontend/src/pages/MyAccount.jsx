import React from "react";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import MyAccoSideBar from "../components/MyAccoSideBar";

const MyAccount = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
          <div className="col1 w-[20%] ">
        <MyAccoSideBar/>
        </div>

        <div className=" col2 w-[80%] ">
          <div className="card bg-gray-200 shadow-md rounded-md  p-5">
            <h2>My Profile</h2>
            <hr />

            <form className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    className="w-full"
                    id="FullName"
                    label="FullName"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    className="w-full"
                    id="Email"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <div className="w-[50%]">
                  <TextField
                    className="w-full"
                    id="Phone"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button className="!capitalize w-[100px] !text-[15px] !bg-gray-300 !text-black !rounded-md gap-2 !mt-4 hover:!bg-red-500">
                  Save
                </Button>

                <Button className="!capitalize w-[100px] !text-[15px] !bg-none !text-gray-800 !rounded-md gap-2 !mt-4 hover:!bg-black hover:!text-white hover:!border-none !border !border-gray-800">
                  cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
