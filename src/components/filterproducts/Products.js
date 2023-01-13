
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart, loadCurrent } from '../../redux/Shopping/shopping-actions'
import { BsCart2, BsEyeFill} from 'react-icons/bs'
const Product = ({productData, addToCart,loadCurrent}) => {
   
    return ( 
        <>
        <div className='cardContainer'>
            <div className='cardHeader'>
                <h2>
                   {productData.title} 
                </h2>
            </div>
            <div className='cardBody'>
                <img
                src={productData.image}
                alt={productData.title}
                /> 
            </div>
            
            <div className='cardBox'>
                <div>
                    <h4>Producto:&nbsp;</h4><p>{productData.title}</p>
                </div>
                <div>
                    <h4>Descripci&oacute;n:&nbsp;</h4><p>{productData.description}</p>
                </div>
                <div>
                    <h4>Precio:&nbsp;</h4><p>${`${productData.price}.0`}</p>
                </div>
            </div>
            <div className='cardFooter'>
                <Link to={`/producto/${productData.id}`}>
                <button onClick={()=>loadCurrent(productData)}>
                   <i>
                    <BsEyeFill/>
                   </i>&nbsp;ver 
                </button>
                </Link>
                <button onClick={()=>addToCart(productData.id)}>
                    agregar&nbsp;
                <i>
                    <BsCart2/>
                </i>
                </button>
            </div>
        </div>
            
        </>
   
    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToCart: (id) =>dispatch(addToCart(id)),
        loadCurrent:(item)=>dispatch(loadCurrent(item))
    }
} 
export default connect(null, mapDispatchToProps)(Product);