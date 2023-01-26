
import Calling from '../components/Modal'
import Hash from '../components/Loading'
import useToggle from '../hooks/useToggle'
import alesia from '../assets/images/alesia-kazantceva-Ob1grL3RBvI-unsplash.jpg'
import jump from '../css/nicolas-picard-JjBQLWs2UPA-unsplash.jpg'
import Rt from 'react'
import useTimeout from '../hooks/useTimeout'
import About from '../components/About'

//import R from 'react'

export default function Home (){
    document.getElementById('title').innerHTML = 'Citi Bike | inicio '
    document.documentElement.scrollTop=0
    const [loading, setLoading] = Rt.useState(true)
    useTimeout(()=>setLoading(false),1000)
    const BgImage = {
        backgroundImage:
        `linear-gradient(rgba(40, 44, 52, 0.1), rgba(40, 44, 52, 0.9)), url(${jump})`,
        backgroundPosition:`center`,
        backgroundRepeat:`no-repeat`,
        backgroundSize:`cover`
      }
    const [isDisplaying, setIsDisplaying] = useToggle(false)
    const handleClose = ()=>{
        setIsDisplaying(false)
    }
    
    return ( 
    <>
        <div className='bigFontsize'>
            <p className='firstLetter'>
                lo mejor para ti
            </p> 
        </div>
        <section className='glass' >
            <div className="outer" >
                    <div className='inner' style={BgImage}>
                    <div className='row'>
                                <button
                                className='btn-banner'
                                onClick={setIsDisplaying}
                                >llamar</button>  
                                {
                                    loading?<Hash />:<img src={alesia} alt='girl'/> 
                                }
                                    
                        <ul>
                            <li>servicio a domicilio</li>
                            <li>mec&aacute;nico 24/7</li>
                            <li>bici alquiler</li>
                        </ul>
                    </div>
                </div>  
            </div>
        </section>
    {
        isDisplaying && (
            <Calling
            bool={handleClose}
            />
        )
    }
<About />
    </>
    );
}

