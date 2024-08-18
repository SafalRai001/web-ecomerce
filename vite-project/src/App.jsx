import { useEffect } from "react";
import { useState } from "react";

import ProductCard from "./components/ProductCard";
import HeroSection from "./components/hero";
import Header from './components/header';
import products from "../constants/product";




let Message = function(){
  return(
    <>
    <Header/>
    <HeroSection/>
    <div className="grid grid-cols-3 box-border text-center mx-3">
      {products.map((detail)=>{
        return(<ProductCard title={detail.title} name={detail.name} price={detail.price} category={detail.category}/>)
      })}
     

    </div>
    <HeroSection/>
    </>
  )
   
}

export default Message;