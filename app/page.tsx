import React from 'react'
import Products from './Components/Product/Product'
import Nav from './Components/Nav/Nav'
import Filter from './Components/Filter/Filter'
import Footer from './Components/Footer/Footer'
import Sub from './Components/Sub/Sub'

const Home = () => {
  return (
   <>
   <Nav/>
   <Sub/>

   <div className='container'>
    <div className='left'>
      <Filter/>
    </div>
    <div className='right'>
      <div className='row1'>
        <Products/>
        <Products/>
        <Products/>
      </div>
      <div className='row1'>
        <Products/>
        <Products/>
        <Products/>
      </div>
      <div className='row1'>
        <Products/>
        <Products/>
        <Products/>
      </div>
      
    </div>
    
   </div>
   <Footer/>
   </>
  )
}

export default Home
