import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import './icons.styles.css'
const Networks = ()=>{
    return(
        <div className="iconsContainer">  
            <div className="iconsContainer-dflex">
                <a className="aref" href="https://www.facebook.com/mauricio.b.perez.982"><BsFacebook className="network-facebook"/></a>
                <a className="aref" href="https://www.instagram.com/"><BsInstagram className="network"/></a>
                <a className="aref" href="https://www.youtube.com/@TheNanamitv"><BsYoutube className="network-wine"/></a>
            </div>  
        </div>);
          }  
export default Networks;