import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import React from 'react'
import Wpp from './Wpp'
import TopBtn from './TopButton'
import {HashRouter as Router, Switch} from 'react-router-dom'
export default function Layout({children}) {
  return (
    <>
<Banner />
<Router>
<Navbar/>
  <main>
      <Switch>
        {children}  
      </Switch>
  </main>
<Footer />
</Router>
<Wpp/>
<TopBtn/>
    </>
  )
}
