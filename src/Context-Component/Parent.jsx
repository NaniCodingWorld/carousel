import { createContext, useEffect, useState } from "react"
import { Child } from "./child"
import axios from "axios"

 export let userContect = createContext(null)

export function Parent(){
 
 const [product, setProduct]  = useState([])
 
 useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(response =>{
        setProduct(response.data)
    })
 },[])
    return(
        <div>
            <h2>Context</h2>
            <userContect.Provider value={product}>
                <Child/>
            </userContect.Provider>
        </div>
    )
}