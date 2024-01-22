import { createContext, useContext, useState } from "react";


export const GlobalStatesContext = createContext({})

function GlobalStatesProvider({ children }){ 
 const [search, setSearch] = useState("")
 const [dishes, setDishes] = useState([])
        return(
           <GlobalStatesContext.Provider value={{ 
                    setSearch,
                    search,
                    dishes,
                    setDishes
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