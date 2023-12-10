import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [click, setClick] = useState(false);
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    return(
        <Context.Provider value={{click, setClick, setData, data, search, setSearch}}>
            {children}
        </Context.Provider>
    )
}