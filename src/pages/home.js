
import Calling from '../components/Modal'
//import Hash from '../components/Loading'
import useToggle from '../hooks/useToggle'
import { IoIosBicycle } from "react-icons/io";
import jump from '../css/nicolas-picard-JjBQLWs2UPA-unsplash.jpg'
import Rt from 'react'
import useTimeout from '../hooks/useTimeout'
import About from '../components/About'
import Next from '../components/Next'

//import R from 'react'

export default function Home (){
    document.getElementById('title').innerHTML = 'Citi Bike | inicio '
    document.documentElement.scrollTop=0
    const [loading, setLoading] = Rt.useState(true)
    useTimeout(()=>setLoading(false),1000)
    const [isDisplaying, setIsDisplaying] = useToggle(false)
    const handleClose = ()=>{
        setIsDisplaying(false)
    }
    return ( 
    <>{
        loading?
        <Next />:
        <Article toggle={handleClose} display={isDisplaying}/>
    }
        
    </>
    );
}

const Article = ({toggle, display})=>{
    const BgImage = {
        backgroundImage:
        `linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${jump})`,
        backgroundPosition:`center`,
        backgroundRepeat:`no-repeat`,
        backgroundSize:`cover`,
       
      }

return    (
    <>
    <div className='bigFontsize'>
            <p className='firstLetter'>
                lo mejor para ti
            </p> 
        </div>
        <section className='glass' >
            <div className="outer" >
            <h3>En el Oriente Antioque&ntilde;o </h3>
                    <div className='inner' style={BgImage}>
                  
                        <IoIosBicycle className='iconApp'/>  
                        <ul>
                            <li>servicio a domicilio</li>
                            <li>mec&aacute;nico 24/7</li>
                            <li>bici alquiler</li>
                        </ul>
                        <button
                            className='btn-banner'
                            onClick={toggle}
                        >llamar</button>
                </div>  
            </div>
        </section>
    {
        display && (
            <Calling
            bool={toggle}
            />
        )
    }
<About />
    </>
)}

