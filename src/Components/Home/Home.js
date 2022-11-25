import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'
function Home() {
  return (
    <div className='home-page'>
      <Header/>
      <Banner/>
      <Footer/>
      
    </div>
  )
}

export default Home
