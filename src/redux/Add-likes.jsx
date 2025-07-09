import { useDispatch, useSelector } from "react-redux"
import { increment } from "./project/counterSlice"

export function Addlikes(){
    const dispatch = useDispatch()
    const selector = useSelector((state)=> state.counter.value)

    function handlecilc(){
        dispatch(increment())
    }
    return(
        <div className="text-center">
            <h4> Likes: {selector}</h4>
            <button onClick={handlecilc}>
               click likes
            </button>
        </div>
    )
}