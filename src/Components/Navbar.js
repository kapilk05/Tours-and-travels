import { Component } from "react";
import "./Navbar.css";
import { Menuitems } from "./Menuitems";
import { Link } from "react-router-dom";


class Navbar extends Component{
  state = {clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
    render() // render is used because component is extended here 
    {
        return(
            <nav  className="NavbarItems">
              <h1 className="nav-logo"> <b> Name </b> </h1>

                <div className="menu-icons" onClick = {this.handleClick}>
                  <i className={ this.state.clicked ? " fas fa-times"
                  : "fas fa-bars" }> 
                  </i>
                </div>

              
              <ul className={this.state.clicked ? "nav-menu active" 
              : "nav-menu" }>
                {
                  Menuitems.map((item, index) => {
                    return(
                      <li key = {index}>
                      <Link className={item.cname} to = {item.url}>
                      <i className= {item.icon}></i>
                      {item.title}
                      </Link>
                  </li>
                    );
                  })
                }
                <a href ="/signup"> <button> Sign-Up  </button> </a>

              </ul>
            </nav> 

        )
    }

}

export default Navbar;
