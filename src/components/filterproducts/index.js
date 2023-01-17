
import Hash from '../pages/Loading'
import Products from "./Products";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterItems } from "../../redux/Shopping/shopping-actions";
import {IoEllipsisVerticalSharp} from 'react-icons/io5'
import R from 'react'
import useTimeout from '../../hooks/useTimeout';
import './aside.css'
const Categories = ({products, filterItems}) => {
  document.getElementById('title').innerHTML = 'Citi Bike | categorias '
    const [loading, setLoading] = R.useState(true)
        useTimeout(()=>setLoading(false),500)
    return ( 
    <>
    <div className="glass"> 
   <div className="productContainer">
    <div className="dashboard">
    <Link to='/productos' className="navLinks"><i><IoEllipsisVerticalSharp /></i>Productos</Link> 
    <div className="sidenav">
      <ul>
        <li className="list active">
          <button onClick={()=>filterItems('1')}
          href="#">
            
            <span className="title">bicicletas</span>
          </button>
        </li>
        <li className="list">
          <button onClick={()=>filterItems('2')} href="#">
           
            <span className="title">rines</span>
          </button>
        </li>
        <li className="list">
          <button onClick={()=>filterItems('3')}>
         
            <span className="title">tenedores</span>
          </button>
        </li>
        <li className="list">
          <button onClick={()=>filterItems('4')}>
          
            <span className="title">direcci&oacute;n</span>
          </button>
        </li>
        <li className="list">
          <button onClick={()=>filterItems('5')}>
     
            <span className="title">grupos</span>
          </button>
        </li>
        <li className="list">
          <button onClick={()=>filterItems('6')}>
         
            <span className="title">art&iacute;culos</span>
          </button>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>  
    </div>
    <div className="products">
        <h1>Categorias</h1>
        {
            loading ? <Hash />:
            <div className='card'>
            {
            products.map(prod =>
            <Products key={prod.id} productData={prod}/>)
        }
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
        products: state.shop.filteredItems 
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        filterItems: (catg)=>dispatch(filterItems(catg))
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Categories);