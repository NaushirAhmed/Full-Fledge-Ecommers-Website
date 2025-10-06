import React from 'react'
import HomeSlider from '../components/home/HomeSlider'
import InfoHome from '../components/home/InfoHome'
import BestSellerSlider from '../components/Sliders/bestSellerSlider'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import CategSlid from '../components/Products/CategSlid'
import StorySlider from '../components/Sliders/StorySlider'
import CarpetSelection from '../components/CarpetSelection'


const Home = () => {
  return (<>
    <HomeSlider/>
    <InfoHome/>
   {/*----------------------------Best Seller Section--------------------------*/}
      <section className="py-5 px-4 bg-white">
         <Title text1={"Browse Our Bestsellers"}/> 
        <BestSellerSlider items={5} text1/>
    </section>
  {/*----------------------------Custumize banner--------------------------*/}  
       <section className="py-5 px-4 bg-white">
        <Link to='/contact'><img src="/customize.png" alt="" /></Link>
       </section>
    {/*----------------------------New arrival-------------------------*/}
    <section className="py-5 px-4 bg-white">
         <Title text1={"New Arrivals"}/> 
        <BestSellerSlider items={5}/>
    </section>

    {/*----------------------------Shop by Category Section--------------------------*/}
    <section className="py-5 px-4 bg-white">
         <Title text1={"Shop by Category"}/> 
       <CategSlid items={5}/>
    </section>

     {/*----------------------------Our Story Section--------------------------*/}
    <section className="py-5 px-4 bg-white">
        <StorySlider/>
    </section>
     {/*----------------------------Shop by Room Section--------------------------*/}
   <section className="py-1 px-4 bg-white">
         <Title text1={"Shop by Room"}/> 
         <CarpetSelection/>
    </section>
  
    

   
    </>
  )
}

export default Home