import FilterProducts from './pages/filterproducts'
import Products from './pages/products';
import Start from './pages'
import Cart from './pages/cart';
import Layout from './components/layout'
import SingleItem from './pages/singleitem';
import TopBtn from './components/TopButton'
import Wpp from './components/Wpp'
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
      <Layout>
        <Switch>
              <Route exact path="/" component={Start}/>
                  <Route exact path="/productos"  component={Products}/>
                  <Route exact path="/carrito"  component={Cart}/>
                  <Route exact path="/filtros"  component={FilterProducts}/>
                  {!currentItem ?<Redirect to='/'/>:
                  <Route exact path="/producto/:id"  component={SingleItem}/>
                  }
            </Switch>
      </Layout>
    </Router>
    <Wpp/>
    <TopBtn/>
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
