import React from "react"
import DisplayClasses from "./DisplayClasses"
import Navbar from '../../components/Navigation/Navbar';
import axios from "axios";

class ManageClasses extends React.Component {

	state = { classes: [] };

	componentDidMount() {
		var username = "davinder69";
		axios.get(`http://localhost:3000/user/`.concat(username)).then(res => {
			var classes = res.data.classes;
			var courses = [];
			var promises = [];
			for(var i = 0; i < classes.length; i++) {
				promises.push(axios.get(`http://localhost:3000/classroom/`.concat(classes[i])).then(res => {
					courses.push({ desc: res.data.name, courseCode: res.data.course_code});
				}))
			}
			Promise.all(promises).then(() => this.setState({ classes: courses }));
		})
	}

	render() {
	
	const user = localStorage.username;
        return (
		    <div>
			<div className="container"> <span className="black-text"> THIS IS SOME EXTRA TEXT </span> </div>
			<div className="container">
				<DisplayClasses classes={this.state.classes} />
			</div>
		    </div>
		)

	}

}

export default ManageClasses
