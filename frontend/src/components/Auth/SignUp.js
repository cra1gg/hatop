import React from "react";
import axios from "axios";
import Navbar from '../../components/Navigation/Navbar';
import { Redirect } from 'react-router-dom'


class SignUp extends React.Component {
	state = {
		username: "",
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		user_type: "",
		error: "",
		success: "",
		redirect: false
	}


	handleChange = (event) => {
		const {id, value} = event.target
		this.setState({
			[id]: value
		})
		console.log(this.state);
	}


	handleSubmit = (event) => {
		event.preventDefault();
		const userCreds = {
			username: this.state.username,
			password: this.state.password,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			user_type: this.state.user_type
		}
		axios.post(`http://localhost:3000/user/signup`, userCreds)
			.then(res => {
				this.setState({
					success: res.data.success,
					error: "",
					redirect: true
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
				<Navbar isLogged={false}/>
				<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>

					<div className="input-field">
						<label htmlFor="first_name">First Name</label>
						<input type="text" id="first_name" onChange={this.handleChange}/>
					</div>
					
					<div className="input-field">
						<label htmlFor="last_name">Last Name</label>
						<input type="text" id="last_name" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>


					<p><label><span>Are you a student or teacher?</span></label></p>
					<p>
					<label>
						<input className="with-gap" name="user_type" value="student" id="user_type" type="radio" onChange={this.handleChange} />
						<span>Student</span>
					</label>
					</p>
					<p>
					<label>
						<input className="with-gap" name="user_type" id="user_type" value="instructor" type="radio" onChange={this.handleChange}/>
						<span>Instructor</span>
					</label>
					</p> 


					<p id="error" style={{color:'red'}}>{this.state.error}</p>
					<p id="success" style={{color:'green'}}>{this.state.success}</p>


					<div className="input-field">
						<button type="submit" className="btn btn-primary btn-lg btn-block active" onClick={this.setSignInRedirect}>
							Sign Up
						</button> 
					</div>
					{this.state.redirect === true ? <Redirect to='/signin' /> : null}
				</form>
			</div>
			</div>
		)

	}

}

export default SignUp