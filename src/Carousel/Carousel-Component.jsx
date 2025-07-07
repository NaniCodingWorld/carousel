import axios from "axios"

import { useEffect, useRef, useState } from "react"

export function CarouselTwo(){
 
  const [product,setproduct] = useState({id:0,title:'',image:'',price:0,description:''})
  const [error,setError] = useState('')
  let count = useRef(1)
  let auto = useRef(null)

  async function loadProduct(id){
     try{
       let result = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setproduct(result.data)
     }catch(error){
         setError(error)
     }
  }
  async function autoProduct(){
    auto.current = auto.current + 1
     try{
       let result = await axios.get(`https://fakestoreapi.com/products/${auto.current}`)
        setproduct(result.data)
     }catch(error){
         setError(error)
     }
  }


  function handleNextClick(){
    count.current = count.current + 1
    loadProduct(count.current)
  }
  function handlePrevClick(){
    count.current = count.current - 1
    loadProduct(count.current)
  }
   function pauseclick(){
    auto.current = setInterval(autoProduct,1000)
  }
  function clickplay(){
    clearInterval(auto.current)
  }

  useEffect(()=>{
   loadProduct(1)
  },[])

    return(
       <div className=" d-flex justify-content-center ">
         <div className="card p-2 m-2 w-50">
             <div className="card-header text-center">
                  <h3>{product.title}</h3>
             </div>
             <div className="card-body ">
              <div className="row">
                     <div className="col-2 d-flex flex-column justify-content-center align-items-center"> 
                      <button onClick={handlePrevClick} className=" bi bi-chevron-left  btn-lg"></button>
                      </div>
                      <div className="col-8 ">
                        <img height='300px' width='100%' src={product.image}/>
                      </div>
                       <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                        <button onClick={handleNextClick} className=" bi bi-chevron-right  btn-lg"></button>
                       </div>
                       <div className="card-footer text-center">
                           <button onClick={clickplay} className="bi bi-pause btn-warning me-2 ms-2"> </button> 
                           <button onClick={pauseclick} className="bi bi-play btn-danger"></button>
                       </div>
              </div>

             </div>
         </div>

       </div>
      
    )
}