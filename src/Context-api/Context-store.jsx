import { createContext, useEffect, useState } from "react"
import { ContectChildren } from "./Context-Children"


 export let userContenxt = createContext(null)

export function ContextParent(){

    const [count, setCount] = useState(0)

    function handlecil(){
        setCount(count + 1)
    }

    useEffect(()=>{
       if(count === 5){
          throw new Error('something wentwrong')
       }
    },[count])

    return(
        <div className="text-center">
            <userContenxt.Provider value={count}>
                <ContectChildren/>
                <button onClick={handlecil} className="btn btn-warning"> Like</button>
            </userContenxt.Provider>
        </div>
    )
}