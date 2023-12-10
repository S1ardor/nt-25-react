import { useContext } from "react"
import { Context } from "../../context"

export const Search = () => {
    const {search, setSearch} = useContext(Context)
        return(
        <input style={{margin: "1rem"}} onKeyUp={(event) => setSearch(event.target.value)} type="text" />
    )
}