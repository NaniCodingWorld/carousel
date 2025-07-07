import { error } from "jquery";
import { Component } from "react";


class  ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            haserror : false
        }
    }
    static getDerivedStateFromError(Error){
         return {haserror: true}
    }
    componentDidCatch(info, error){
    this.setState({haserror:true})
    console.log(info, error)
    }
    render(){
        if(this.state.haserror){
            return(
                <div className="text-center">
                    <h4>Something Went wrong</h4>
                </div>
            )
        }   
        return this.props.children
    }
}

export default ErrorBoundary