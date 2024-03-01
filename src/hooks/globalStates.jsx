import { createContext, useContext, useState } from "react";


export const GlobalStatesContext = createContext({})

function GlobalStatesProvider({ children }){ 
 const [search, setSearch] = useState("")
 const [dishes, setDishes] = useState([])
 const [request, setRequest] = useState(Number(1))
 const [value, setValue ] = useState("0")
        return(
           <GlobalStatesContext.Provider value={{ 
                    setSearch,
                    search,
                    dishes,
                    setDishes,
                    request,
                    setRequest, 
                    value,
                    setValue
           }}>
                {children}
           </GlobalStatesContext.Provider> 
        )
}

function useGlobalStates(){  //hook para usar o context para toda a aplicação
    const context = useContext(GlobalStatesContext)

    return context;
}

export { GlobalStatesProvider, useGlobalStates };