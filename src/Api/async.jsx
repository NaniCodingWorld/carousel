import axios from "axios"
import { useState } from "react"



export function Async1(){
    const [count, setCount] = useState(0)
  function couser(){
         
    return function(){
        setCount += 1
    }
    return count
  }

    return(
        <div>
            <p>{count}</p>
            <button onClick={couser}>button</button>
            
        </div>
    )
}