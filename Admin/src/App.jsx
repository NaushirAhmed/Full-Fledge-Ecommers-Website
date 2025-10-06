import React from "react"
import { createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
import DashBoard from "./pages/DashBoard"
import Header from "./Component/Header"
import SideBar from "./Component/SlideBar"

function App() {
  const router = createBrowserRouter([{
    path:'/',
    exact:true,
    element:
      <>
      <section className="main">
        <Header/>
        <div className="contrntmain flex ">
          <div className="sidebarwrapper w-[20%]">
          <SideBar/>
          </div>
          <div className="containright py-4 px-5">
            <DashBoard/>
          </div>
        </div>
      </section>
    
    </>
  }])

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App
