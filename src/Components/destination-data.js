import { Component } from "react"
import "./destination.css"


class Ddata extends Component{
    render() {
        return(
            <div className= {this.props.cname}> 
            <div className="des-text"> 
            <h2> {this.props.heading} </h2>
            <p>   
                {this.props.text}
            </p>
            </div>
            <div className="image">
            <img alt="Alibaug, Maharashtra" src = {this.props.img1}/>
            <img alt="Alibaug, Maharashtra" src = {this.props.img2}/>
            </div>
            </div>
        );
    }
}


export default Ddata