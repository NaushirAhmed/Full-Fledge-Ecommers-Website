import Navbar from "./components/headers/Navbar";
import Newslatters from "./components/headers/Newslatters";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./pages/ProductsDetails";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MyContext } from "./Context/MyContext";

import Drawer from "@mui/material/Drawer";
import toast, { Toaster } from 'react-hot-toast';


import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductsZoom from "./components/Products/ProductsZoom";
import ProductDetailComponent from "./components/Products/ProductDetailComponent";



import Login from "./pages/Login";
import Register from "./pages/Register";
import CartPanel from "./components/CartPanel";
import Cart from "./pages/Cart";
import Verify from "./pages/Verify";
import ForgotPassword from "./pages/ForgotPassword";
import CheckOut from "./pages/CheckOut";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";
import MyOrders from "./pages/MyOrders";

function App() {
  const [openProductDetailModel, setOpenProductDetailMode] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleCloseProductDetailMode = () => {
    setOpenProductDetailMode(false);
  };

  const DrawerOpenCart = (newOpen) => () => {
    setOpenCart(newOpen);
  };

  const openAlertBox = (status,msg)=>{

    if(status === "success"){
      toast.success(msg);
    }
    if(status === "error"){
      toast.error(msg);
    }
  }

  // Create a stable context value
  const values = {
    setOpenProductDetailMode,
    setOpenCart,
    openAlertBox,
    isLogin,
    setIsLogin
  };

  return (
    <>
      <MyContext.Provider value={values}>
        <Newslatters />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
           <Route path="/checkOut" element={<CheckOut />} />
            <Route path="/my-account" element={<MyAccount />} />
             <Route path="/my-list" element={<MyList />} />
              <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        <Footer />
        </MyContext.Provider>

      <Toaster />

        <Dialog
          fullWidth={true}
          maxWidth={"lg"}
          open={openProductDetailModel}
          onClose={handleCloseProductDetailMode}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <div className="flex items-center w-full ProductDetailModelContainer relative">
              <Button
                className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full  !text-black !absolute top-[0px] right-[0px] !bg-[#f1f1f1] "
                onClick={() => handleCloseProductDetailMode()}
              >
                <IoMdClose className="text-[20px]" />
              </Button>
              <div className="col1 w-[50%]">
                <ProductsZoom />
              </div>
              <div className="col2 w-[50%] px-7">
                <ProductDetailComponent />
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/***Cart panel */}

        <Drawer
          open={openCart}
          onClose={DrawerOpenCart(false)}
          anchor={"right"}
          className="cartpanel"
        >
          <div className="flex items-center justify-between py-3 px-4 gap-2 border-b border-[rgba(0,0,0,0.1)]">
            <h4 className="text-[16px]">Shopping Cart (1) </h4>
            <IoMdClose
              onClick={DrawerOpenCart(false)}
              className="text-[20px] cursor-pointer"
            />
          </div>
          <CartPanel/>

        </Drawer>
      
    </>
  );
}

export default App;
