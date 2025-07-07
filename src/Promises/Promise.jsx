import axios from "axios"
import { useEffect } from "react"

export function NewPromise(){
   async function api(){
      await  axios.get('https://fakestoreapi.com/products/categories')
        .then(response=>{
            console.log(response)
        }).catch((error)=>{console.log(error)})
         }
         useEffect(()=>{
            api()
         },[])
    return(

         
        <div>

        </div>
    )
}