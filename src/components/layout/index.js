import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <Banner />
      <Navbar/>
        <main>
          {children}  
        </main>
    <Footer />
    
    </>
  )
}
