
import Navbar from './components/navbar';
import Products from './components/products';
import FilterProducts from './components/filterproducts'
import Cart from './components/cart';
import SingleItem from './components/singleitem';

import Start from './components/pages/Start'
import Footer from './components/Footer'
import TopBtn from './components/pages/TopButton'
import Wpp from './components/pages/Wpp'
import Banner from './components/pages/Banner'
import {BrowserRouter as Router, 
  Switch, 
  Route, 
  Redirect,
   //useLocation
  } 
   from 'react-router-dom'
import { connect } from 'react-redux'

function App({currentItem}) {
  return (
    <>
    <Router>
    <Navbar/>
    <Banner />
     <main> 
            <Switch>
              <Route exact path="/" component={Start}/>
                  <Route exact path="/productos"  component={Products}/>
                  <Route exact path="/carrito"  component={Cart}/>
                  <Route exact path="/filtros"  component={FilterProducts}/>
                  {!currentItem ?<Redirect to='/'/>:
                  <Route exact path="/producto/:id"  component={SingleItem}/>
                  }
            </Switch>
      </main>
    </Router>
    <Wpp/>
    <TopBtn/>
    <Footer />
    </>
    
  );                      
}
/*<Route path="*" component={NotFound}/>
function NotFound(){
  const location = useLocation()
  return( 
  <>
  You are on: {location.pathname}
  </>)
}
*/
const mapStateToProps = state =>{
  return{
    currentItem: state.shop.currentItem
  }
}
export default connect(mapStateToProps)(App);
