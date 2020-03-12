import React from "react"
import { NavLink } from "react-router-dom"

function SignedInLinks(props) {

    //console.log(props)

    return(
        <ul className="right">
            <li><NavLink to="">My Classes</NavLink></li>
            <li><NavLink to="">Grades</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li>
                <NavLink to="/" className="btn btn-floating black lighter-1">
                    RN
                </NavLink>
            </li>
        </ul>
        
    )

}

export default SignedInLinks