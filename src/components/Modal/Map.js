import './modal.styles.css'
import { FiAlertTriangle} from "react-icons/fi";
import { RiCloseLine} from "react-icons/ri";
import Rt from 'react'
const Map = ({bool})=>{
    const mapRef = Rt.useRef()
    return(
        <div className="modalBg">
            <div className="modal">
                    <div className="modalHeader">
                        <h5 className='modalHeading'><FiAlertTriangle/>INFO</h5>  
                        <button className="closeBtn" onClick={bool}>
                        <RiCloseLine style={{marginBottom:"-3px"}} />
                        </button>
                    </div>
                    <div className='gMap'> 
                            <iframe 
                            title="mapa"
                            ref={mapRef}
                            width="100%" 
                            height="400px" 
                            src="https://maps.google.com/maps?q=6.0273633,-75.4271104&amp;z=15&amp;output=embed ">
                            </iframe>
                    </div>
            </div>
        </div>
     
    );
}
export default Map;