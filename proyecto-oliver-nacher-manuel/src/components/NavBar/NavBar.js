import React from "react";
import { Link } from "react-router-dom";


export default function NavBar (props) {
    return(
        <nav className="Navbar-contenido">
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li><Link to="/categoria/Buzos">Buzos</Link></li>
                <li><Link to="/categoria/Remeras">Remeras</Link></li>
                
            </ul>
        </nav>
    )
}

