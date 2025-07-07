
import { lazy, Suspense } from "react"

export function LazyCondition(){
    return(
        <div style={{width:'250px'}}>
            <h4>Lazy loading</h4>
            <form >
               <div >
                 <lable>Name</lable>
                 <input type="text" className="form-control"/>
                </div>
                <div >
                 <lable>Email</lable>
                 <input type="text" className="form-control"/>
                </div>
                <button className="w-25 btn btn-warning m-2">save</button>
            </form>
        </div>
    )
}