
let express = require('express')
let mongoClient = require("mongodb").MongoClient
let connectStr = "mongodb://127.0.0.1:27017"

let app = express()

app.get('/',(req,res)=>{
  res.send('fetch')
});
app.get('/apiFetch',(req,res)=>{
  mongoClient.connect(connectStr,(err,clientObj)=>{
    if(!err){
      var data = clientObj.db("database");
      data.collection("productsAll").find().toArray((err,documents)=>{
              if(!err){
                res.send(documents)
              }
      })
    }
  })
})

app.listen(8899)


// import axios from "axios"
// import { useEffect, useRef, useState } from "react"

// export function CarouselTwo(){

// const [product, setProduct] = useState({id:0,title:'',image:'',price:0})

// let count = useRef(0)
// let auto = useRef(1)

// function Loadproduct(id){
//       axios.get(`https://fakestoreapi.com/products/${id}`)
//       .then(response =>{
//         setProduct(response.data)
//       })
//     }
//       function Loadautoproduct(){
//         count.current = count.current + 1
//         axios.get(`https://fakestoreapi.com/products/${count.current}`)
//         .then(response =>{
//           setProduct(response.data)
//         })
// }
// function HandleNextclick(){
//     count.current = count.current + 1
//     Loadproduct(count.current)
// }
// function HandlePrevclick(){
//     count.current = count.current - 1
//     Loadproduct(count.current)
// }
// function PlyHandleClick(){
//    auto.current = setInterval(Loadautoproduct, 2000)
// }

// function PauseClick(){
//     clearInterval(auto.current)
// }
// useEffect(()=>{
//     Loadproduct(1)
// },[])
//     return(
//         <div className="d-flex justify-content-center align-items-center">
//             <div className="card" style={{height:'400px',width:'400px'}}>
//             <div className="row">
//                 <div className="col-2 d-flex align-items-center">
//                       <button className="bi bi-chevron-left btn lg" onClick={HandlePrevclick}></button>
//                 </div>
//                 <div className="col-8">
//                    <div className="card-header">
//                      <h6>{product.title}</h6>
//                    </div>
//                    <div className="card-image-top text-center">
//                        <img style={{height:'230px',width:'200px'}} src={product.image}/>
//                    </div>
//                    <div className="card-footer text-center">
//                          <button className="bi bi-pause btn btn-warning mx-2" onClick={PauseClick}></button>
//                          <button className="bi bi-play btn btn-success" onClick={PlyHandleClick}></button>
//                    </div>
//                 </div>
//                 <div className="col-2 d-flex align-items-center">
//                 <button className="bi bi-chevron-right btn lg " onClick={HandleNextclick}></button>
//                 </div>

//             </div>
           
//         </div>
//         </div>
//     )
// }