import { IoBicycleSharp, IoBuildSharp } from "react-icons/io5";
import {ImLocation} from 'react-icons/im'
import Map from '../components/Modal/Map'
import useToggle from '../hooks/useToggle'
const About = () => {
    const [map, setMap] = useToggle(false)
    const handleMap = ()=>{
        setMap(false)
    }
    return ( 
        <>
            
            
        <div className='rowr'>
            <div>
                <h5>Ciclopaseos</h5>
                <i className='iconBiglime'><IoBicycleSharp/></i>
                <p>&#10004;&nbsp;Ecoturismo, cross-country y ruta</p>
            </div>

            <button className='mapBtn'
            onClick={setMap}
            ><ImLocation/>&nbsp;mapa
            </button>

            <div>
                <h5>Servicio t&eacute;cnico</h5>
                <i className='iconBigrosso'><IoBuildSharp/></i>
                <p>&#10004;&nbsp;Servicio en el taller y a domicilio</p> 
            </div> 
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
export default About