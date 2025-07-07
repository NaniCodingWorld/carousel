import { error } from "jquery";
import React from "react";


export class ClassBaseComponent extends React.Component{
    constructor(){
        super()
        this.state = {
             hasError : true
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError : true})
    }
    static getDerivedStateFromerror(){
        this.setState({hasError: true})
    }
    render(){
       if(this.state.hasError){
        return(
            <div>

            </div>
        )
       }
       return this.props.children
    }
}