 import axios from "axios"

import { useEffect, useState } from "react"
import $ from 'jquery'

export function MultipleFetching(){

  const [product, setProducts] = useState([])
  function loadproduct(){
  //  axios.get('https://fakestoreapi.com/products/categories')
  //  .then(response=>{
  //   setProducts(response.data)
  //  })
   $.ajax({
    method:'GET',
    url:'https://fakestoreapi.com/products/categories',
    success:(response)=>{
      setProducts(response)
    }
   })
      
  }
  useEffect(()=>{
    loadproduct()
  },[])
      return (
        <div>
            <h4>Data Fteching</h4>
               <select>
                {
                  product.map(item => <option key={item}>{item}</option>)
                }
               </select>
        </div>
      )
}