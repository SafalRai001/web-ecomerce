import React from 'react'
import Header from '../src/components/header'
import HeroSection from '../src/components/hero'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <Outlet/>
    </>
  )
}

export default MainLayout