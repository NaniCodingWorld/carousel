import { useCallback, useContext } from "react"
import { userContect } from "./Parent"



export function Child(){

    let contenxt = useContext(userContect)
    return(
        <div>
            <h3>Child</h3>
            <ul>
                {
                    contenxt.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        </div>
    )
}