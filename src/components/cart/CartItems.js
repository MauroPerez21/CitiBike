import R from 'react'
import { connect } from 'react-redux'
import { removeFromCart, adjustQty } from '../../redux/Shopping/shopping-actions'
import {BsTrash} from 'react-icons/bs'
const CartItem = ({adjustQty,removeFromCart,...props}) => {
    const [input, setInput] = R.useState(props.itemData.qty)
    const subTotal = props.itemData.qty * props.itemData.price
    const onChangeHandler = (e)=>{
        setInput(e.target.value)
        adjustQty(props.itemData.id, e.target.value)
        console.log(e.target.value)
    }
    return ( 
    <tr>
        <td data-label='título'>{props.itemData.title}</td>
        <td data-label='descripción'>{props.itemData.description}</td>
        <td data-label='cantidad'>   
        <input 
        type="number" 
        min="1" 
        id="qty"
        value={input}
        onChange={onChangeHandler}
        />
        </td>
        <td data-label='precio'>{props.itemData.price}</td>
        <td data-label='subtotal'>{subTotal}</td>       
        <td>
            <button type="button"
            onClick={()=>removeFromCart(props.itemData.id)}
            ><BsTrash/>&nbsp;borrar</button>
        </td>
    </tr> );
}
const mapDispatchToProps = dispatch =>{
    return {
        removeFromCart:(id)=>dispatch(removeFromCart(id)),
        adjustQty:(id, value) => dispatch(adjustQty(id,value))
    }
}
export default connect(null, mapDispatchToProps)(CartItem);