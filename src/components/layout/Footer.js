import React from 'react'
import './footer.style.css'
import {Link} from 'react-router-dom'
import { IoIosBicycle } from "react-icons/io";
import { ImLocation, ImUsers } from "react-icons/im";
import { RiMap2Fill } from "react-icons/ri";
import { BsHouse, BsCart,BsHandIndex } from "react-icons/bs";
export default function Footer()
{
    return(
        <>
        <footer className="footer">
                <div className="footerContainer">        
                    <CitiBike/>
                    <Address/>         
                    <Hours/>
                    <SiteMap />
                </div>
                <Form />
        </footer>
         <h3 className="code">&#169; Copyright ~ 2022</h3>
        </>
        
        
    )
}
const SiteMap = ()=>(
<div className='siteMap'>
    <h2><i className='icoGreen'>
        <RiMap2Fill/>
        </i>&nbsp;Mapa del sitio:</h2>
    <ul >
        <li>
            <Link to='/'>
                <BsHouse/>&nbsp;Contacto
            </Link>
        </li>
        <li>
            <Link to='/productos'>
                <BsHandIndex/>&nbsp;Cat&aacute;logo
            </Link>
        </li>
        <li>
            <Link to='/carrito'>
            <BsCart/>&nbsp;compras
            </Link>
        </li>
    </ul>
</div>
)
const Address = ()=>(
<div>
    <h2><i className='icoRed'><ImLocation/></i>&nbsp;Direcci&oacute;n:</h2>
    <div className="listInfo">
    <h4 >Ciudad:</h4><p>&nbsp;La Ceja</p> 
    </div>
    <div className="listInfo">
        <h4>Provincia:</h4><p>&nbsp;Antioquia</p> 
    </div>
    <div className="listInfo">
        <h4>Pa&iacute;s:</h4><p>&nbsp;Colombia</p> 
    </div>
    
    <div className="listInfo">
        
        <h4 >C&oacute;digo postal:</h4><p>&nbsp;500240</p> 
    </div>
</div>
)
const Hours = ()=>(
    <div>
        <h2><i className='icoPearl'><ImUsers/></i>&nbsp;Atenci&oacute;n:</h2>
        <div className="listInfo">
            <h4 >Horas:</h4><p>&nbsp;9am a 5pm</p> 
        </div>
        <div className="listInfo">
            <h4 >Dias:</h4><p>&nbsp;lunes a viernes</p> 
        </div>
        <div className="listInfo">
            <h4 >S&aacute;bado:</h4><p>&nbsp;8am a 1pm</p> 
        </div>
    </div>
)
const Form = ()=>{
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('la funcion esta deshabilitada')

    }
    return(
    <section className='footerRow'>
                    <div className='footerInnerRow'>
                        <div className="code">
                                <p className='codeSpacing'>Citi-Bike mec&aacute;nica y repuestos</p>
                                <form >Suscribirse:
                                <input type="text"/>
                                <button type="submit"
                                onClick={handleSubmit}
                                >enviar</button>
                                </form>
                                <div className='footerStrong'><p><strong>Email:&nbsp;</strong>infocitibike@gmail.com</p></div>
                        </div>
                </div>
            </section>
)}
export const CitiBike = () =>  ( 
        <div className="icon">
            <p>Citi</p>
            <span><IoIosBicycle/></span>
            <p>Bike</p>
        </div>
     );

 
