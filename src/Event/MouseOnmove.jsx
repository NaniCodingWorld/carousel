import { useState } from "react"


export function MouseOn(){

    const [styleobj, setStyleobj] = useState({position:'',top:'',left:''})
  function handlemouse(e){
    setStyleobj({
        position:'fixed',top:e.clientY +'px', left:e.clientX +'px'
    })
  }

    return(
        <div onMouseMove={handlemouse} className="text-center">
            <div style={{height:'100vh'}}>
            <h2>Hello India</h2>
            <img  style={styleobj} height='50px' width='50px' src="download.png"/>
        </div>
        </div>
    ) 
}