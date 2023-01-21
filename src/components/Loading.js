
import HashLoader from 'react-spinners/HashLoader'

import React from 'react'
const Loading = () => {    
    let Colors = [
        "#61dafb",
        "#3366ff",
        "#f1f1f1",
        "#ff00ff",
        "#00ff00",
        "orange",
        "#282c34",
        "#ffff00",
        "#61dafb",
        "#009900",
        "#cc33ff"   ]
        
        let [loading] = React.useState(true);
        let [color ] = React.useState(Colors[Math.ceil(Math.random()*10)]);
            
            return(
            <div className='hashCenter'
            >
                <HashLoader 
                color={color} 
                loading={loading} 
                size={150} 
                />
            </div>
                  )
}
 
export default Loading;