import R from 'react'
import './table.style.css'
import {connect} from 'react-redux'
import CartItem from './CartItems'
import { IoCartOutline } from "react-icons/io5";
import Next from "../../components/Next"
import useTimeout from '../../hooks/useTimeout';
const Cart = ({cart}) => {
    const [loading, setLoading] = R.useState(true)
    useTimeout(()=>setLoading(false),1000)

    document.getElementById('title').innerHTML = 'Citi Bike | carrito '
    document.documentElement.scrollTop=0
    const [totalPrice, setTotalPrice] = R.useState(0)
    const [totalItems, setTotalItems] = R.useState(0)
    
    R.useEffect(()=>{
        let items = 0;
        let price = 0;
        
        cart.forEach(item => {
            items += item.qty
            price += item.qty * item.price
           
        })
        setTotalPrice(price)
        setTotalItems(items)
    },
    [
        cart, 
        totalPrice, 
        totalItems, 
        setTotalPrice, 
        setTotalItems
    ])
    return ( 
   
    <>
    { 
    loading?<Next />:
    
    totalPrice === 0? 
    <div className='cartOuter'>
        <div className='cartInner'>
            <i>
                <IoCartOutline/>
            </i>
            <p className="bigFontsize">no se han seleccionado art&iacute;culos</p>
        </div>
    </div>:
 <div className='tableContainer'>
 <table className='table'>
 <thead>
     <tr className='heading'>
        
         <th>nombre</th>
         <th>descripci&oacute;n</th>
         <th>unidades</th>
         <th>precio/unidad</th>
         <th>subtotal</th>
         <th>eliminar</th>
     </tr>
 </thead>
 <tbody>
 {
     cart.map(item=>{
         return(
            <CartItem key={item.id} itemData={item}/> 
         )     
     })
     
 }
     
 </tbody>
 <tfoot>
 <tr>
     <td data-label='#'></td>
     <td data-label='-'>unidades:</td>
     <td data-label='-'>{totalItems}</td>
     <td data-label='-'>total:</td>
     <td data-label='-'>{totalPrice}</td>
     <td data-label='-'></td>
 </tr>
</tfoot>
</table>
 </div>
    }
    </>
    );
}

const mapStateToProps = state =>{
   return {
    cart: state.shop.cart
   } 
} 
export default connect(mapStateToProps)(Cart);