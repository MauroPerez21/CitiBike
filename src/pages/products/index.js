
import Product from './Products'
import Hash from '../../components/Loading'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { IoFunnelSharp } from 'react-icons/io5'
import Rt from 'react'
import useTimeout from '../../hooks/useTimeout'
const Products = ({products}) => {
    document.getElementById('title').innerHTML = 'Citi Bike | productos '
    const [loading, setLoading] = Rt.useState( true )
    useTimeout(()=>setLoading(false),1000)
    return ( 
    <>
    <div className="glass">
    <div className='productContainer'>
        <div className='dashboard'>
             <Link to='/filtros' className="navLinks"><i><IoFunnelSharp/></i> Categorias</Link> 
        </div>
        <div>
            <h1>Productos</h1>
            {loading? <Hash />:
             <div className='card'>
            {products.map(prod => 
            <Product key={prod.id} productData={prod} />
            )}
            </div>
            }
        </div>
    </div>
    </div>
    
    </>
    
    
    );
}
const mapStateProps = state =>{
    return {
        products: state.shop.products
    }
}
export default connect(mapStateProps)(Products);