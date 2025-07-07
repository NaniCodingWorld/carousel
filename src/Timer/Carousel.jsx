import axios from "axios"
import { useEffect, useRef, useState } from "react"

export function Carousel(){

    const [product, setProduct] = useState({id:0,title:'',description:'',image:''})
    const count = useRef(1)
    const auto = useRef(null)

    function loadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response =>{
            setProduct(response.data)
        })
    }
    function loadautoProduct(id){
        count.current = count.current + 1
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
        .then(response =>{
            setProduct(response.data)
        })
    }
    function righthandle(){
        count.current = count.current + 1
        loadProduct(count.current)
    }
    function lefthandle(){
        count.current = count.current - 1
        loadProduct(count.current)
    }
    function plahandle(){
       auto.current =  setInterval(loadautoProduct,2000)
    }
    function pausehandle(){
        clearInterval(auto.current)
    }
    useEffect(()=>{
        loadProduct(1)
    },[])
    return(
        <div className="d-flex justify-content-center" >
                                
            <div className="card d-flex w-50" > 
                <div className="card-header text-center">
                <h3>{product.title}</h3>
                </div>
                <div className="card-body row ">
                    <div className="col-2 d-flex justify-content-center align-items-center" >
                         <button onClick={lefthandle} className=" btn lg bi bi-chevron-left">

                         </button>
                    </div>
                    <div className="col-8 ">
                     <img style={{height:'300px', width:'350px'}} src={product.image}/>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                            <button  onClick={righthandle} className=" btn lg bi bi-chevron-right">

                            </button>
                    </div>

                </div>
                <div className="card-footer d-flex justify-content-center align-items-center">
                     <button onClick={pausehandle} className=" me-2 btn btn-warning bi bi-pause"></button>
                     <button onClick={plahandle} className=" me-2 btn btn-success bi bi-play"></button>
                </div>
            </div>
        </div>
    )
}