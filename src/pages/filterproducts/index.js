
import Hash from '../../components/Loading'
import Products from "../../components/Products";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterItems } from "../../redux/Shopping/shopping-actions";
import {IoEllipsisVerticalSharp} from 'react-icons/io5'
import R from 'react'
import useTimeout from '../../hooks/useTimeout';
import './aside.css'
const Categories = ({products, filterItems}) => {
  document.getElementById('title').innerHTML = 'Citi Bike | categorias '
  document.documentElement.scrollTop=0
    const [loading, setLoading] = R.useState(true)
        useTimeout(()=>setLoading(false),1000)
    return ( 
    <>
    <div className="glass"> 
   <div className="productContainer">
    <div className="dashboard">
    <div className="navaLinks">
      <Link to='/productos'><i><IoEllipsisVerticalSharp /></i>&nbsp;Productos</Link> 
    </div>
    
    <div className="sidenav">
      <ul>
        <li>
          <button onClick={()=>filterItems('1')}
          href="#">
            
            <span >bicicletas</span>
          </button>
        </li>
        <li>
          <button onClick={()=>filterItems('2')} href="#">
           
            <span>rines</span>
          </button>
        </li>
        <li>
          <button onClick={()=>filterItems('3')}>
         
            <span className="title">tenedores</span>
          </button>
        </li>
        <li>
          <button onClick={()=>filterItems('4')}>
          
            <span>direcci&oacute;n</span>
          </button>
        </li>
        <li>
          <button onClick={()=>filterItems('5')}>
     
            <span className="title">grupos</span>
          </button>
        </li>
        <li>
          <button onClick={()=>filterItems('6')}>
         
            <span>art&iacute;culos</span>
          </button>
        </li>
      </ul>
    </div>  

    </div>
    <div>
        <h1>Categorias</h1>
        {
            loading ? <Hash />:
            <div className='kard'>
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