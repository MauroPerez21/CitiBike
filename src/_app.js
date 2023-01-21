import FilterProducts from './pages/filterproducts'
import Products from './pages/products';
import Start from './pages'
import Cart from './pages/cart';
import Layout from './components/layout'
import SingleItem from './pages/singleitem';
//import R from 'react'
import { connect } from 'react-redux'
import {
  Route, 
  Redirect,
   //useLocation
  } 
   from 'react-router-dom'


function _app({currentItem}) {
  console.log(currentItem)
  return (
    <>
      <Layout>
              <Route exact path="/" component={Start}/>
                  <Route exact path="/productos"  component={Products}/>
                  <Route exact path="/carrito"  component={Cart}/>
                  <Route exact path="/filtros"  component={FilterProducts}/>
                  {(currentItem === null) ?
                  <Redirect to='/'/>:
                  <Route exact path="/producto/:id"  component={SingleItem}/>
                  }
      </Layout>
    </>
    
  );                      
}

const mapStateToProps = state =>{
  return{
    currentItem: state.shop.currentItem
  }
}
export default connect(mapStateToProps)(_app);
