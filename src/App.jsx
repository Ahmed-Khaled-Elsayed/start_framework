import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/nav'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Portfolio from './components/portfolio/portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'


function App() {
  const [count, setCount] = useState(0)

  let x = createBrowserRouter([
    {path:"" , element:<Layout/> , children: [
    {index:true , element:<Home/>},
    {path:"/about" , element:<About/>},
    {path:"/portfolio" , element:<Portfolio/>},
    {path:"/contact" , element:<Contact/>},
    {path:"*" , element:<Notfound/>}
  ]}
])
  return (
    <>
      <RouterProvider router={x}>

      </RouterProvider>
    </>
  )
}

export default App
