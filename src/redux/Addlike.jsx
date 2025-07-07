import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/countersilce"



export function Addlike(){

    let disptach = useDispatch()
    function handlelikes(){
        disptach(increment())
    }

    function handledislike(){
        disptach(decrement())
    }

    const selector = useSelector((state)=> state.counter.value)
    return (
        <div>
              <h4>Likes {selector}</h4>
              <button onClick={handlelikes} className="me-2">Like</button>
              <button onClick={handledislike}>UnLike</button>
        </div>
    )
}