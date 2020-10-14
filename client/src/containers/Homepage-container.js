import React from "react";
import { Helmet } from "react-helmet";
import HeroBanner from "../components/Hero-banner";
import CarouselHomepage from "../components/Carousel-homepage";

 const Homepage = () => (
 
  
  <div>
  <Helmet>
    <title> Organic Bio Ecommerce</title>  
     <meta name="description" content="Organic Bio Ecommerce" />

    </Helmet> 
     <HeroBanner />
     <div ><CarouselHomepage /></div> 
  </div>
 );

export default Homepage;
