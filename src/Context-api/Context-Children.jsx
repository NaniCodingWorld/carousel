import { useContext } from "react"
import { userContenxt } from "./Context-store"


export function ContectChildren(){

    let context = useContext(userContenxt)

    return(
        <div className="text-center">
            <h2>Context Children</h2>
            <h6>Like Count: {context}</h6>
            
        </div>
    )
}