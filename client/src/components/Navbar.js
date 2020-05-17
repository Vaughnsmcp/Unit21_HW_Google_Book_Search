import React from "react";

import { Link } from "react-router-dom";

function NavBar (){

   
        return (
            
                <ul className ="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={window.location.pathname === `/` ? ` nav-link active` : `nav-link`}>
                            Search Literature
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                        to="/save"
                        className={window.location.pathname === `/save` ? ` nav-link active` : `nav-link`}>
                            Save Literature
                        </Link>
                        </li>
                        </ul>
        )
    }



export default NavBar;

