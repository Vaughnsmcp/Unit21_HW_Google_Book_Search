import React from "react";

import { Link } from "react-router-dom";

function NavBar (){

   
        return (
            
                <ul className ="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link
                        to="/"
                        className={window.location.pathname === `/` ? ` nav-link active` : `nav-link`}>
                            Chip, chip, my good fellow!
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                        to="/save"
                        className={window.location.pathname === `/save` ? ` nav-link active` : `nav-link`}>
                            Cheerio!!
                        </Link>
                        </li>
                        </ul>
        )
    }



export default NavBar;

