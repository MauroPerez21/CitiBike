import React from "react";
import './topbutton.style.css'
export default function TopButton(){
    const viewRef = React.useRef()
   // let relativeHeight = document.documentElement.scrollTop
    //let height = document.documentElement.scrollHeight
    //let div = relativeHeight/height
    const [top, setTop] = React.useState(0) 
//console.log(div)
    // console.log(viewRef.current) 
    const displayTop = ()=>{
        setTop(document.documentElement.scrollTop)
        
    }
    const windowTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    React.useEffect(()=>{
        window.addEventListener("scroll",displayTop)
        return () =>{
            window.removeEventListener("scroll",displayTop) 
        }
        
    }, [top]);
    return (
        <>
        {(top > 240)?
        <div 
            ref={viewRef}
            className="topbtn"
            onClick={windowTop}
            >&#9195;
            <div className='top'>
              <p className='topText'>Ir al principio</p>
            </div>
        </div>
          : ``
        }
        </>     
    )
}