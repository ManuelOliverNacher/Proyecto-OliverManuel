import React from "react";
import { Link } from "react-router-dom";
import undCon from './undCon.png'


export default function Logo (props) {
    return(
        <Link to="/"><div className="Navbar-logo"> <img src={undCon} alt="Logo"/></div></Link>
    )
}

