import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import './navbar.style.css'
import ReactGA from 'react-ga'

import { BsHouse, BsCart,BsHandIndex } from "react-icons/bs";
const Navbar = ({cart}) => {
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
        <header className='fixed-top'>
           <div className='topNav'>
                <div className='navWrapper'>
                    <nav className="navContainer">
                        <Link to='/' className="navLinks">< BsHouse/>&nbsp;inicio</Link> 
                        <Link to='/productos' className="navLinks"><BsHandIndex/>&nbsp;cat&aacute;logo</Link> 
                        <Link to='/carrito' className="navLinks">
                            <BsCart /><span className='exponent'>{cartCount === 0?<></>:cartCount}</span>
                        </Link>  
                    </nav>
                </div>    
            </div>  
        </header>
        </>
    
    );
}
 
const mapStateToProps = state => {
    return {cart: state.shop.cart}
}
export default connect(mapStateToProps)(Navbar);