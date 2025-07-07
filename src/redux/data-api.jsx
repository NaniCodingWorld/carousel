import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createThunk } from "./fetch-api"

export function DataApi(){

let dispath = useDispatch()
let data = useSelector((state) => state.data.datafetch)
  useEffect(()=>{
    dispath(createThunk())
  }, [])
  console.log(data)
    return(
        <div>
            <ul>
            {
              data.map(item => <li key={item}>{item.toUpperCase()}</li>)
            }
            </ul>
        </div>
    )
}