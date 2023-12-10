import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Search } from "../../Components"
import { Context } from "../../context"

export const Character = () => {
    const {data, setData, search} = useContext(Context)
    let BASE_URL = `https://rickandmortyapi.com/api/character/?name=${search}`
    useEffect(() => {
        (function(){
            axios.get(BASE_URL).then(response =>  setData(response.data.results))
        }())
    },[BASE_URL])
    return(
        <>
        <Search />
            <select defaultValue={""}>
                <option value="" disabled>Status</option>
                <option value="dead">Dead</option>
                <option value="alive">Alive</option>
                <option value="unknown">unknown</option>
            </select>
            <div >
            {data?.map(item => {
                return(
                    <div key={item.id} style={{position: "relative", display: "inline-block"}}>
                        <span style={{position: "absolute", top: "0", right: "0", zIndex: 1}}>{item.status}</span>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                    </div>
                )
            })}
            </div>
        </>
    )
}