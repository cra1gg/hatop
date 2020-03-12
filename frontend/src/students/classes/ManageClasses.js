import React from "react"
import DisplayClasses from "./DisplayClasses"
import Navbar from '../../components/Navigation/Navbar';

class ManageClasses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            classes: [
                {id: 1, courseCode: "CSC301", desc: "Intro. To Software Engineering"},
                {id: 2, courseCode: "CSC309", desc: "Intro To Web Development"},
				{id: 3, courseCode: "CSC343", desc: "Intro. To DB. (My Favorite Course ;))"},
				{id: 4, courseCode: "CSC363", desc: "P=NP stuff"},
                {id: 5, courseCode: "CSC358", desc: "3 courses in 1 course"},
            ]
        }
	}

	render() {
        return (
			<div>
				<Navbar isLogged={true}/>
			<div className="container">
				<DisplayClasses classes={this.state.classes} />
			</div>
			</div>
		)

	}

}

export default ManageClasses