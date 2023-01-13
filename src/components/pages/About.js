import Map from './Modal/Map'
import useToggle from '../../hooks/useToggle';

import { IoBicycleSharp, IoBuildSharp } from "react-icons/io5";
import {ImLocation} from 'react-icons/im'
const About = () => {
    const [map, setMap] = useToggle(false)
    const handleMap = ()=>{
        setMap(false)
    }
   
    return ( 
        <>
        <div className='bigFontsize' id='about'>
                <p className='blu'>
                <strong className='firstLetter'>Citi&nbsp;</strong> 
                <strong className='firstLetter'>Bike&nbsp;</strong>
                </p> 
            </div>
            <h3>En el Oriente Antioque&ntilde;o </h3>
            <button className='mapBtn'
                onClick={setMap}
                ><ImLocation/>&nbsp;mapa
            </button>
        <div className='row'>
            <section className='column'>
                <div>
                    <h5>Ciclopaseos</h5>
                    <i className='iconBiglime'><IoBicycleSharp/></i>
                    <p>&#10004;&nbsp;Ecoturismo, cross-country y ruta</p>
                </div>
            </section>
            <section className='column'>
                <div>
                    <h5>Servicio t&eacute;cnico</h5>
                    <i className='iconBigrosso'><IoBuildSharp/></i>
                    <p>&#10004;&nbsp;Servicio en el taller y a domicilio</p> 
                </div> 
            </section>
            
        </div>
        <div className='textAlign'>
            <div className='inlineBlock'>
                <h3>Misi&oacute;n:</h3>
                <p>fabricamos y vendemos bicicletas, hacemos ciclopaseos, buscamos promover el ejercicio al aire libre y el transporte urbano con cero emisiones de CO <small>2</small></p>
            </div>        
        </div>
        {
            map && (
                <Map 
                bool={handleMap}
                />
            )
        }
    </> 
     );
}
 
export default About;