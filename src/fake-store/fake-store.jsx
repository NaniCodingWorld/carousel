import axios from "axios"
import { useEffect, useState } from "react"



export function Fakestore(){

    const[product, setProduct] = useState([])

    function loadproduct(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response =>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
        loadproduct()
    },[])

    return(
        <div>
           <ul>
            {
                product.map(item => <li className="fs-3" key={item}>{item.toUpperCase()}</li>)
            }
           </ul>
        </div>
    )
}