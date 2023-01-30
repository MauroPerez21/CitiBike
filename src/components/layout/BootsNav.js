import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import './navbar.style.css'
import ReactGA from 'react-ga'
import Navbar from 'react-bootstrap/Navbar'
import { BsHouse, BsCart,BsHandIndex, 
 // BsPeople 
} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
function BootsNav({cart}) {
    const [cartCount, setCartCount] = React.useState(0)
    React.useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
        let count = 0
        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count)
    },[cart, cartCount])
  return (
    <>
      <Navbar sticky="top" className='fixed'>
        <div className='topNav'>
            <div className='navWrapper'>
                <nav className="navContainer">
                    
                    <Link to='/nosotros' className="navLinks">< BsHouse/>&nbsp;inicio</Link>  
                        <Link to='/productos' className="navLinks"><BsHandIndex/>&nbsp;cat&aacute;logo</Link> 
                        <Link to='/carrito' className="navLinks">
                            <BsCart /><span className='exponent'>{cartCount === 0?<></>:cartCount}</span>
                        </Link>  
                </nav>
            </div>    
        </div> 
      </Navbar>
    </>
  );
}
const mapStateToProps = state => {
    return {cart: state.shop.cart}
}
export default connect(mapStateToProps)(BootsNav);
