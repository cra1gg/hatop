import React from "react"
import { NavLink } from "react-router-dom"

function StudentLinks(props) {

    //console.log(props)

    return(
        <ul className="right">
            <li><NavLink to="/viewClasses">My Classes</NavLink></li>
            <li><NavLink to="/studentStats">Grades</NavLink></li>
            <li><NavLink to="/enrolClass">Enrol in a Class</NavLink></li>
            <li><NavLink to='/quizzes'>Quizzes</NavLink></li>
            <li><NavLink to='/signOut'>Sign Out</NavLink></li>
        </ul>
        
    )

}

<<<<<<< HEAD:frontend/src/components/Navigation/SignedInLinks.js
export default SignedInLinks
=======
export default StudentLinks
>>>>>>> 8c77f9040ffa9d8939bf0d7b0e4276f0b02aceb4:frontend/src/components/Navigation/StudentLinks.js
