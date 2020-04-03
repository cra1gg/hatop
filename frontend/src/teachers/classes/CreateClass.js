import React from "react"
import Navbar from '../../components/Navigation/Navbar';
import axios from "axios";

class CreateClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			classId: "",
			className: "",
			classDescription: "",
			error: "",
			success: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}



	handleChange = (event) => {
		const {id, value} = event.target
		this.setState({
			[id]: value
		})
		console.log(this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		if(localStorage.username == null) {
		   this.setState({
			  error: "You must be logged in to create a class"
		   })
		   return;
		}
		if(localStorage.user_type == 'student') {
			this.setState({
			   error: "You must be an instructor to create a class"
			})
			return;
		 }
		if (this.state.classId === '' || this.state.className === '' || this.state.classDescription === '') {
			this.setState({
				error: "One of the field is empty. Please provide more info."
			 })
			 return;
		}
		const classDetails = {
			courseCode: this.state.classId,
			name: this.state.className + ' ' + this.state.classDescription,
			instructor_ids: [localStorage.username],
			quizlets: [],
			marks: []
		  }
		  console.log(this.state);
		  axios.put(`http://localhost:3000/classroom/`, classDetails)
			  .then(res => {
				  this.setState({
					  success: res.data.success,
					  error: ""	
				  })
  
			  }, (error) => {
				  this.setState({
					  error: error.response.data.error,
					  success: ""
				  })
			  });
	 }

	render() {
		return (
			<div>
				<Navbar/>
				<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Add A Class</h5>

					<div className="input-field">
						<label htmlFor="classId">Class ID</label>
						<input type="text" id="classId" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="className">Class Name</label>
						<input type="text" id="className" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="classDescription">Class Description</label>
						<input type="text" id="classDescription" onChange={this.handleChange}/>
					</div>


					<p id="error" style={{color:'red'}}>{this.state.error}</p>
					<p id="success" style={{color:'green'}}>{this.state.success}</p>
					<input type="submit" class="btn btn-primary btn-lg btn-block active" value="Create class" />

				</form>
			</div>
			</div>
		)

	}

}

export default CreateClass