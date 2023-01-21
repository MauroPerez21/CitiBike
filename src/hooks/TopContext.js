import R,{useContext} from 'react'
const TopContext = R.createContext()

export function useTop(){
    return useContext(TopContext)
}

export function TopProvider({children}){
    const top = document.documentElement.scrollTop
return (
    <TopContext.Provider value={top}>
        {children}
    </TopContext.Provider>
)
}
