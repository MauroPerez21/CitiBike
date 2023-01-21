import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrent} from '../../redux/Shopping/shopping-actions'
import {BsFillEyeFill, BsCart2} from 'react-icons/bs'
//import React from 'react'
const Product = ({productData, addToCart,loadCurrent}) => {
   
   const f = new Intl.NumberFormat("es-sp",{
    currency:"COP",
    style:"currency",
   })
    return ( 
        
    <div className='cardContainer'>
        <div className='cardHeader'>
            <h2>
                {productData.title}
            </h2>
        </div>
        <div className='cardBody'>
            {!productData.image?<div>cargando...</div>:
                <img
                src={productData.image}
                alt={productData.title}
                />
            }
            
        </div>
        <div className='cardBox'>
            <div>
                <h4>Producto:&nbsp;</h4>
                <p>{productData.title}</p>
            </div>
            <div>
                <h4>Descripci&oacute;n:&nbsp;</h4>
                <p>{productData.description}</p>
            </div>
            <div>
                <h4>Precio:&nbsp;</h4>
                <p>${`${f.format(productData.price)}`}</p>
            </div>
        </div>
        
        <div className='cardFooter'> 
            <Link to={`/producto/${productData.id}`}>
                <button
                onClick={()=>loadCurrent(productData)}>
                    <i><BsFillEyeFill/></i>&nbsp;ver
                </button>
            </Link>
                <button onClick={()=>addToCart(productData.id)}>
                    agregar<i>&nbsp;<BsCart2/></i>
                </button>
        </div>
    </div>

    );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToCart: (id) =>dispatch(addToCart(id)),
        loadCurrent:(item)=>dispatch(loadCurrent(item))
    }
} 
export default connect(null, mapDispatchToProps)(Product);