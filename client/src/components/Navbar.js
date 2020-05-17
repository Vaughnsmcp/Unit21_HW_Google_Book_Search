import React, { Component } from "react"

import {Link, NavLink} from "react-router-dom"

class NavBar extends Component {

    // componentDidMount(){

    // }
    render(){
        return (
            
                <NavLink acitiveClassName = "active"
                
                isActive={()=>window.location.pathname==="/home"}
                to="/"
                > bookSearch
                </NavLink>
        
        )
    }
}


export default NavBar

