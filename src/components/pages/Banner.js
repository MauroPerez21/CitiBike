import R from 'react'
const Banner = () => {
    function rotateString ()
        {
          var element = document.getElementById('target')
          var textNode = element.childNodes[0]
          var text = textNode.data
          setInterval (function(){
            text = text[text.length-1] + text.substring(0,text.length-1)
            textNode.data = text
          },250)
         
        } 
        R.useEffect(()=>{
            rotateString()
        },[])
    return ( 
       
        <div className="bannerContainer">
            <h2 className="centerBanner">
                MANTENIMIENTO Y REPARACI&Oacute;N
            </h2>
            <h2
            id="target"
            className="bannerTxt"
            >&nbsp;&nbsp;Citi&nbsp;Bike&nbsp;&nbsp;</h2>
        </div>   
     );
}

export default Banner;