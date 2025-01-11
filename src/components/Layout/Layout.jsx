import React from 'react'
import Nav from '../navbar/nav'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}

export default Layout
