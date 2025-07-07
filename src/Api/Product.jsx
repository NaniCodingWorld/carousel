

export function ProductCard({title,image,price,description}){
    return(
        <div className='d-flex text-center' >
            
            <div className="  card m-2 border border-2 2px 2px 2px white" style={{ width:'350px'}}>
                 <div className="card-header">
                     <h6>{title}</h6>
                 </div>
                 <div className="card-top-images text-center m-2">
                     <img style={{height:'200px',width:'200px'}} src={image}/>
                 </div>
                 <div className="card-body">
                    <h5>{price.toLocaleString('en-in',{style:'currency',currency:"INR"})}</h5>
                    
                 </div>
                 <div className="card-footer text-center">
                   <button className="bi bi-cart3 btn btn-warning w-25s">Add Cart</button>
                 </div>
            </div>
        </div>
    )
}