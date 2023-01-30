import Header from './header'
import Footer from './Footer'
import React from 'react'
import Wpp from './Wpp'
import TopBtn from './TopButton'

import {HashRouter as Router, Switch} from 'react-router-dom'
export default function Layout({children}) {
  return (
    <>
<Router>

  <Header/>
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
