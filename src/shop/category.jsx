import axios from "axios"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Catogey(){

    const [category, setCategory] = useState([])
    const[cookies, setCookie, removeCookie ] = useCookies('userid')
    let navigate = useNavigate()

    useEffect(()=>{
       if(cookies['userid']){
        axios.get('https://fakestoreapi.com/products/categories')
       .then(response =>{
        setCategory(response.data)
       })
       }else{
         navigate('/login')
       }
    
    },[])
    function removeout(){
        removeCookie('userid')
        navigate('/login')
    }
    return(
        <div>
            <h3>Category -{cookies['userid']} <button onClick={removeout} className="btn btn-link">Sign Out</button> </h3>
            <ul>
                {
                    category.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}