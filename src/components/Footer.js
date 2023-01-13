import React from 'react'
import '../css/footer.style.css'
import { IoIosBicycle } from "react-icons/io";
import { ImLocation, ImUsers } from "react-icons/im";
import { RiMap2Fill } from "react-icons/ri";
export default function Footer()
{
    return(
        <>
        <footer className="footer">
            <div className="footerContainer">
                <CitiBike/>
                    <div>
                        <h2><i className='icoRed'><ImLocation/></i>&nbsp;Direcci&oacute;n:</h2>
                        <div className="addressInfo">
                        <h4 >Ciudad:</h4><p>&nbsp;La Ceja</p> 
                        </div>
                        <div className="addressInfo">
                            <h4>Provincia:</h4><p>&nbsp;Antioquia</p> 
                        </div>
                        <div className="addressInfo">
                            <h4>Pa&iacute;s:</h4><p>&nbsp;Colombia</p> 
                        </div>
                       
                        <div className="addressInfo">
                            
                            <h4 >C&oacute;digo postal:</h4><p>&nbsp;500240</p> 
                        </div>
                    </div>
                    <div>
                        <h2><i className='icoPearl'><ImUsers/></i>&nbsp;Atenci&oacute;n:</h2>
                        <div className="addressInfo">
                            <h4 >Horas:</h4><p>&nbsp;9am a 5pm</p> 
                        </div>
                        <div className="addressInfo">
                            <h4 >Dias:</h4><p>&nbsp;lunes a viernes</p> 
                        </div>
                        <div className="addressInfo">
                            <h4 >S&aacute;bado:</h4><p>&nbsp;8am a 1pm</p> 
                        </div>
                    </div>
                    <div>
                        <h2><i className='icoGreen'><RiMap2Fill/></i>&nbsp;Mapa del sitio:</h2>
                        <ul>
                            <li>Contacto</li>
                            <li>Cat&aacute;logo</li>
                            <li>Carrito de compras</li>
                        </ul>
                    </div>
            </div>
                <section className='footerRow'>
                    <div className='footerInnerRow'>
                        <div className="code">
                                <p className='codeSpacing'>Citi-Bike mec&aacute;nica y repuestos</p>
                                <form >Suscribirse:
                                <input type="text"/>
                                <button type="submit">enviar</button>
                                </form>
                                <div className='footerStrong'><p><strong>Email:&nbsp;</strong>infocitibike@gmail.com</p></div>
                        </div>
                </div>
            </section>
        </footer>
         <h3 className="code">&#169; Copyright ~ 2022</h3>
        </>
        
        
    )
}
const CitiBike = () => {
    return ( 
        <div className="icon">
            <p>Citi</p>
            <i><IoIosBicycle/></i>
            <p>Bike</p>
        </div>
     );
}
 

