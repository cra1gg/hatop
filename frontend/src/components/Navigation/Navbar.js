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
                <Link to="/" className="brand-logo">
                    <img src="https://i.imgur.com/thofpKl.png" height="60" width="150" alt="HaTop" />
                </Link>
                {navbarLinks}
            </div>
        </nav>
    )
}

export default Navbar