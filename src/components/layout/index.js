import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import React from 'react'

export default function Layout({children}) {

  React.useEffect(()=>{
    //document.body.scrollTop = 0
    //document.documentElement.scrollTop = 0
  })
  
  const handleTop = ()=>{
    //document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <>
    <Banner />
      <Navbar/>
        <main>
          {children}  
        </main>
      <button
      onClick={handleTop}
      >TOP</button>
    <Footer />
    
    </>
  )
}
