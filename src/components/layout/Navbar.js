import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import './navbar.style.css'
import { BsHouse, BsCart,BsHandIndex } from "react-icons/bs";
const Navbar = ({cart}) => {
    const [cartCount, setCartCount] = React.useState(0)
    React.useEffect(()=>{
        let count = 0
        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count)
    },[cart, cartCount])
    return ( 
    <div className='topNav'>
        <div className="appLogo"></div>
        <div className='navWrapper'>
            <nav className="fixedNav">
                <div className="navWrapper">
                <Link to='/' className="navLinks">< BsHouse/>&nbsp;inicio</Link> 
                    <Link to='/productos' className="navLinks"><BsHandIndex/>&nbsp;cat&aacute;logo</Link> 
                    <Link to='/carrito' className="navLinks">
                        <BsCart /><span className='exponent'>{cartCount === 0?<></>:cartCount}</span>
                    </Link>  
                </div>
            </nav>
        </div>
            
    </div> 
    );
}
 
const mapStateToProps = state => {
    return {cart: state.shop.cart}
}
export default connect(mapStateToProps)(Navbar);