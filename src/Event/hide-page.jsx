import { useState } from "react"


export function HideData(){

    const[showdata, setShowdata] = useState('d-none')

    function handleshow(){
        if(showdata === 'd-none'){
            setShowdata('d-bolck')
        }else{
            setShowdata('d-none')
        }
    }
    return(
        <div className="text-center">
            <h1 className="btn btn-dark w-100" onClick={handleshow}>Name</h1>
            <p className ={showdata}> My Family Memebrs verey innocent and heartfull peplaes</p>
        </div>
    )
}