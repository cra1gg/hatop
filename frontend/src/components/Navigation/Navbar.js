import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

function Navbar(props) {
    const { isLogged } = props
    const navbarLinks = isLogged ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Some Logo</Link>
                {navbarLinks}
            </div>
        </nav>
    )
}

export default Navbar