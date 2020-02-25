import React from "react"
import { NavLink } from "react-router-dom"

function SignedOutLinks(props) {

    //console.log(props)

    return(
        <ul className="right">
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="">Explore</NavLink></li>
            <li><NavLink to="">Register</NavLink></li>
            <li><NavLink to="">Log In</NavLink></li>
            <li><NavLink onClick={props.signOut} to='/'>Sign Out</NavLink></li>
            <li>
                <NavLink to="/" className="btn btn-floating black lighter-1">
                    RN
                </NavLink>
            </li>
        </ul>
        
    )

}

export default SignedOutLinks