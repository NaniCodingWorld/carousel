import React, { useState } from "react";
import ReactDOM from "react-dom"


export function Pop(){

  const [amount, setAmount] = useState(100000)

  function handleHundred(){
      setAmount(amount - 100)
  }
  return(
   
    <div>
      <h2>Nani:  cash</h2> 
      <h3>{amount}</h3>
      <div>
        <button onClick={handleHundred} className="mx-2 m-2">100</button>
        <button>200</button>
      </div>
      <div>
        <button className="mx-2 m-2">500</button>
        <button>1000</button>
      </div>
    </div>
  )
    
}