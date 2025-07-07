import { useState } from "react"


export function KeyBord(){
const [msg ,setMsg] = useState('')
const [range, setRnage] = useState('')
 function veryfypasse(e){
    if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
          setMsg('Stong Password')
          setRnage('text-success')
    }else{
        if(e.target.value.length < 4){
            setMsg('Poor Password')
            setRnage('text-danger')
        }else{
            setMsg('week Password')
            setRnage('text-warning' )
        }
    }
 }


    return(
        <div>
            <div >
            <h3>Key Up</h3>
            <input onKeyUp={veryfypasse} type="password"/>
            <p className={range}>{msg}</p>
            </div>
        </div>
    )
}