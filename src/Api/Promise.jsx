import axios from "axios"
import { error } from "jquery"
import { useEffect, useState } from "react"
import { Catogey } from "../shop/category"



export function PromiseOne(){


    const [value , setValue] = useState([])
    


    useEffect(()=>{
        
          let promise1 =  axios.get('https://fakestoreapi.com/products/categories')
          
          let promise2 =  axios.get('https://fakestoreapi.com/products')
          
          Promise.all([promise1,promise2])
          .then(response=>{
              setValue(response.data)
          })
    },[])
    return(
        <div>
             <h1> Promise</h1>
              <select>
{value.map( item => <select key={item}>{item}</select>
)}
             </select>
        </div>
    )
}