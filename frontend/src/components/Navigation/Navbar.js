import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from "react-redux"

function Navbar(props) {
    const isLogged  = props.isLogged
    const navbarLinks = <SignedInLinks/>
    // Use this line isntead once the redux store works
    //const navbarLinks = isLogged ? <SignedInLinks /> : <SignedOutLinks />

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

const mapStateToProps = (state) => {
	return {
		isLogged: !state.auth.isEmpty
	}
}

export default Navbar