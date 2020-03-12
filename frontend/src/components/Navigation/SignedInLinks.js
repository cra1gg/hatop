import React from "react"
import { NavLink } from "react-router-dom"

function SignedInLinks(props) {

    //console.log(props)

    return(
        <ul className="right">
            <li><NavLink to="/viewClasses">My Classes</NavLink></li>
            <li><NavLink to="/studentStats">Grades</NavLink></li>
            <li><NavLink to="/enrolClass">Enrol in a Class</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li>
                <NavLink to="/" className="btn btn-floating black lighter-1">
                    CD
                </NavLink>
            </li>
        </ul>
        
    )

}

export default SignedInLinks