import e from "cors"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUsers } from "./project/commentSlice"

export function Comments(){

    const [usename, setUsername] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.newSubscriber.users)

    function commentadd(e){
        setUsername(e.target.value)
        
    }
   function onSubmithandke(e){
        e.preventDefault()
        dispatch(addUsers(usename))
        setUsername('')
    }
    return(
        <div className="text-center">
          
                <form onClick={onSubmithandke}>
                 <div>
                     <ul>
            {selector.map(item=> <li key={item} className="list-unstyled">{item}</li>)}
           </ul>
                    </div>
                    <div>Subscribers: </div>
                       <input  onChange={commentadd} value={usename} type="text" />
                    <button type="submit">submit</button>
                </form>
        </div>
    )
}