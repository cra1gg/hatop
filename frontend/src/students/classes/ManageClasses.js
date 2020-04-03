import React from "react"
import DisplayClasses from "./DisplayClasses"
import Navbar from '../../components/Navigation/Navbar';
import axios from "axios";

class ManageClasses extends React.Component {

	state = { classes: [], error: ""};

	componentDidMount() {

		/**
		 * Need to delay the time login button is clicked and the localstorage is set, so 
		 * we must wait a certain amount of time before requesting the classes from backend.
		 */
		var delayInMilliseconds = 100; //1 second

		setTimeout(() => {
		  
			var username = localStorage.username;
			axios.get(`http://localhost:3000/user/`.concat(username)).then(res => {
			var classes = res.data.classes;
			var courses = [];
			var promises = [];
			for(var i = 0; i < classes.length; i++) {
				promises.push(axios.get(`http://localhost:3000/classroom/`.concat(classes[i])).then(res => {
					courses.push({ id: i + 1, courseCode: res.data.course_code, desc: res.data.name });
				}))
			}
			Promise.all(promises).then(() => this.setState({ classes: courses }));
		})

		}, delayInMilliseconds);

	}

	render() {
        return (
			<div>
				<Navbar isLogged={true}/>
				<div className="container"> 
					<div className="row">
						<div className="post card col s3"> </div>
						<span className="col s6"> <h3 className="text-black center"> My Classes </h3> </span>
						<div className="post card col s3"> </div>
					</div> 
				</div>
				<div className="container">	
					<DisplayClasses classes={this.state.classes} />
				</div>
			</div>
		)

	}

}

export default ManageClasses
