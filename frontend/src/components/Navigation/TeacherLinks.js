import React from "react"
import { NavLink } from "react-router-dom"

function TeacherLinks(props) {

    //console.log(props)

    return(
        <ul className="right">
            <li><NavLink to="/viewClasses">My Classes</NavLink></li>
            <li><NavLink to="/studentStats">Grades</NavLink></li>
            <li><NavLink to="/createClass">Create A Class</NavLink></li>
            <li><NavLink to='/quizBuilder'>Create A Quiz</NavLink></li>
            <li><NavLink to='/quizzes'>Quizzes</NavLink></li>
            <li><NavLink to='/signOut'>Sign Out</NavLink></li>
        </ul>
        
    )

}

export default TeacherLinks