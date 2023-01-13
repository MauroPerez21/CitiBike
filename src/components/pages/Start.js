//import Biciclette from '../../assets/images/_mx1.jpg'
import Calling from './Modal'
import useToggle from '../../hooks/useToggle'
import alesia from './alesia-kazantceva-Ob1grL3RBvI-unsplash.jpg'
import jump from '../../css/nicolas-picard-JjBQLWs2UPA-unsplash.jpg'
import Rt from 'react'
import Hash from '../pages/Loading'
import About from './About'
import useTimeout from '../../hooks/useTimeout'
//import useUpdateEffect from '../../hooks/useUpdateEffect'

export default function StartPage (){
    document.getElementById('title').innerHTML = 'Citi Bike | inicio '
    const [loading, setLoading] = Rt.useState(true)
    useTimeout(()=>setLoading(false),500)
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

