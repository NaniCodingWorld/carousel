
import axios from "axios";
import React,{Component} from "react";



export class Hdo extends React.Component{
    constructor(){
        super()
        this.state = {
            name : []
        }
        this.handleclick = this.handleclick.bind(this)
 
    }

    // componentDidMount(){
    //     this.setState({name :'manu'})
    // }
    handleclick(){
        axios.get('https://fakestoreapi.com/products/categories')
        .then(response =>{
            this.setState({name:response.data})
        })
    }
    componentDidMount(){
        this.handleclick()
    }
    render(){
        return(
            <div>Class Component
                <ul>{this.state.name.map(item => <li key={item}>{item}</li> )}</ul>
                <button onClick={this.handleclick}> click</button>
            </div>
        )
    }
}