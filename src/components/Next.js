import R from 'react'
import {CitiBike} from './layout/Footer'
const Next =()=> {
    function rotateString ()
        {
          var element = document.getElementById('target')
          var textNode = element.childNodes[0]
          var text = textNode.data
          setInterval (
            function(){
            text = text[text.length-1] + text.substring(0,text.length-1)
            textNode.data = text
          },250)
         
        } 
        R.useEffect(()=>{
            rotateString()
        },[])
  return (
    <>
    <CitiBike/>
    <div >
        <h1>
          <em>
          <strong id="target">
             &nbsp;&nbsp;Citi&nbsp;Bike&nbsp;&nbsp;
          </strong>
        </em>
        </h1>
        
    </div>
    </>
    
  )
}
export default Next