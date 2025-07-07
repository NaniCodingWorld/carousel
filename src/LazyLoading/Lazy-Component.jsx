
import { lazy, Suspense, useState } from "react"

const Child = lazy(()=> import("./Lazy-Child"))

export function LazyComponent(){
    const [show, setshow] = useState(false)
function handleclick(){
      if(show === true){
           setshow(false)
      }else{
        setshow(true) 
      }
}
    return(
        <div>
            <h3>Parent Component</h3>
            <button onClick={handleclick} className="btn btn-warning">Click</button>
       <Suspense>
       <Child/>
       </Suspense>
        </div>
    )
}