import React from "react"
import { Link } from "react-router-dom"
import StudentLinks from "./StudentLinks"
import SignedOutLinks from "./SignedOutLinks"
import TeacherLinks from "./TeacherLinks"

function Navbar(props) {
    var isLogged = false;
    if(localStorage.user_type != null) {
        isLogged = true;
    }

    if (isLogged && localStorage.user_type === 'student') {
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        <img src="https://i.imgur.com/ftWOG0U.png" height="60" width="160" alt="HaTop" />
                    </Link>
                    <StudentLinks/>
                </div>
            </nav>
        )
    } else if (isLogged && localStorage.user_type === 'instructor') {
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        <img src="https://i.imgur.com/ftWOG0U.png" height="60" width="160" alt="HaTop" />
                    </Link>
                    <TeacherLinks/>
                </div>
            </nav>
        )
    } else {
        return(
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        <img src="https://i.imgur.com/ftWOG0U.png" height="60" width="160" alt="HaTop" />
                    </Link>
                    <SignedOutLinks/>
                </div>
            </nav>
        )
    }
}


export default Navbar
