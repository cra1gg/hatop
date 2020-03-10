import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

function Navbar(props) {
    const isLogged  = props.isLogged
    const navbarLinks = <SignedInLinks/>
    if (isLogged) {
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        <img src="https://i.imgur.com/J5Fldt4.png" height="60" width="160" alt="HaTop" />
                    </Link>
                    <SignedInLinks/>
                </div>
            </nav>
        )
    }
    else {
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        <img src="https://i.imgur.com/J5Fldt4.png" height="60" width="160" alt="HaTop" />
                    </Link>
                    <SignedOutLinks/>
                </div>
            </nav>
        )
    }
}

export default Navbar