import { useState } from "react"


export function NormalForm(){

    const [user,setUser] = useState({Name:'',Age:0,Email:''})

    function HnadleNamechange(e){
       setUser({
        Name:e.target.value,
        Age:user.Age,
        Email:user.Email
       })
    }
    function HandleAgechange(e){
      setUser({
        Name:user.Name,
        Age:e.target.value,
        Email:user.Email
      })
    }
    function HandleEmailchange(e){
       setUser({
        Name:user.Name,
        Age:user.Age,
        Email:e.target.value
       })
    }

    function HandleSubmit(e){
          console.log(user)
          e.preventDefault()
    }
    return(
        <div>
            <h3>Normal form</h3>
            <form onSubmit={HandleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd>< input onChange={HnadleNamechange} type="text"/></dd>
                    <dt>age</dt>
                    <dd><input onChange={HandleAgechange} type="text"/></dd>
                    <dt>Email</dt>
                    <dd><input onChange={HandleEmailchange} type="text"/></dd>
                </dl>
                <button className="btn btn-primary w-10">Submit</button>
            </form>
        </div>
    )
}