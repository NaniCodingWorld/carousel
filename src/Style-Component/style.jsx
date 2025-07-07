import { useState } from "react"



export function Style(){
 

    let [obj, setObj] = useState('border border-2 bg-dark')
    let [redius, setRadius] = useState({borderRadius:'10px'})

    function handlecghange(e){
      if(e.target.checked){
        setObj('border border-2 p-3 bg-dark text-white')
        setRadius({borderRadius:'10px'})
      }else{
        setObj('border border-2 p-3 bg-white text-dark')
        setRadius({borderRadius:'10px'})
      }
    }

    return(
        <div className="  w-25 d-flex justify-content-center p-3  align-items-center" style={{height:'100vh', }}>
            <form className={obj} style={redius}>
                <div className="form-switch"> <input onChange={handlecghange} className="form-check-input" type="checkbox"/></div>
                <div>
                    <label>Name</label>
                    <input placeholder="User Name" className="form-control" type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder="Password" className="form-control" type="password"/>
                </div>
                <button className="btn btn-warning w-100 my-2" type="submit">Submit</button>
            </form>
        </div>
    )
}