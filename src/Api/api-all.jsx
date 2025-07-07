import { useEffect, useState } from "react"

import $ from 'jquery'
import axios from "axios"

export function ApiAll(){

    const [product, setProduct] = useState([])
    function LoadProduct(){
        // $.ajax({
        //     method:'get',
        //     url:'https://fakestoreapi.com/products/categories',
        //     success:(response)=>{
        //            setProduct(response)
        //     }
        // })
       
        // fetch('https://fakestoreapi.com/products/categories')
        // .then(response => response.json())
        // .then(product => setProduct(product))
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response =>{
            setProduct(response.data)
        })
       
    }
    useEffect(()=>{
        LoadProduct()
    },[])

    return(
        <div>
            <select>
               { product.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}