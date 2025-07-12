import React from "react";

export class Errorboundaries extends React.Component{
    constructor(){
        super()
        this.state = {
            hasError:false
        }
    }
static getDerivedStateFromError(error){
     this.setState({hasError : true})
}

    render(){
       
        if(this.state.hasError){
              return(
                <div>

                </div>
              )
        }else{
           return this.props.children
        }
       
    }
}