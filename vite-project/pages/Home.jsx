import React from 'react'
import HeroSection from '../src/components/hero'

import ProductCard from '../src/components/ProductCard'
import products from '../constants/product'

function Home() {
  return (
    <>
    <div className='grid grid-cols-3'>
      {products.map((detail)=>{
        return(<ProductCard title={detail.title} name={detail.name} price={detail.price} category={detail.category}/>)
      })}
    </div>
    <HeroSection/>

    </>
  )
}

export default Home