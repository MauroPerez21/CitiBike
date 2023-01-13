import Rt from 'react'
export default function useUpdateEffect(callback, dependencies){
    const firstRenderRef = Rt.useRef(true)
    Rt.useEffect(()=>{
        if(firstRenderRef.current){
            firstRenderRef.current = false
            return       
        }
        return callback()
    },dependencies)
}
