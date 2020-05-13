import React, { Component } from "../../node_modules/@types/react"

import {Link, NavLink} from "../../node_modules/react-router-dom"

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

