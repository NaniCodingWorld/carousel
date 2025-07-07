import { useState } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


export function Login(){

    const [name, setName] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies('userid')
    let navigate = useNavigate()

    function handlename(e){
        setName(e.target.value)
    }
    function storeid(){
        setCookie('userid', name)
        navigate('/category')
    }
    return(
        <div className="">
            <h3>Use Details</h3>
            <dl>
                <dt>UserId</dt>
                <dd><input onChange={handlename} type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
                <button onClick={storeid} className="btn btn-primary">Submit</button>
            </dl>
        </div>
    )
}