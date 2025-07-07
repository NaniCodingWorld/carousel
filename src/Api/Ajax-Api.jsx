
import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "./Product"
import { error } from "jquery"

export function AjaxApi(){

    const[product, setProduct] = useState([])

     async function handleProduct(){
        try{
            const response = await axios.get('https://fakestoreapi.com/products')
        setProduct(response.data)
        console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        handleProduct()
    },[])
   return(
    <div className="d-flex flex-wrap">
        
           {
            product.map(data => < ProductCard {...data}></ProductCard>)
           }
        
    </div>
   )
}