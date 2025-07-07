import { error } from "jquery"
import { useEffect, useState } from "react"


export function CountCompoent(){

    const [Count, setCount] = useState(0)
    function inCreaseClick(){
        setCount( Count + 1)
    }
    useEffect(()=>{
        if(Count === 5){
             throw new error('crash application')
        }
    },[Count])
    return(
        <div>
            <h3>Count</h3>
            <h4 >{Count}</h4>
            <button onClick={inCreaseClick}>click</button>
        </div>
    )
}
