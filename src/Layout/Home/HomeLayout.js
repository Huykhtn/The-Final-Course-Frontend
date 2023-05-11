import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div className='min-h-screen w-screen '>
    <Header/>

    <Outlet/>

    <Footer/>
    </div>
  )
}

export default HomeLayout