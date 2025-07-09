
import { useDispatch, useSelector } from "react-redux"
import { createThunk } from "./project/apiSlisec"
import { useEffect } from "react"


export function ProdctFetch(){

    const data = useDispatch()
    const selector = useSelector((state)=> state.dataFetch.users)
    useEffect(()=>{
        data(createThunk())
    },[])

    return(
        <div>
           <select>
            {selector.map(item => <option key={item}>{item}</option>)}
           </select>
        </div>
    )
}