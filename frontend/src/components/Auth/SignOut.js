import React from "react"
import { NavLink } from "react-router-dom"

function SignedOutLinks(props) {
    localStorage.clear();
    console.log(localStorage);
    console.log("SIGNED OUT")
    return(
        <p>Signed out successfully.</p>
    )

}

export default SignedOutLinks;