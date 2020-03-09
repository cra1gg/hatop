import React from "react"
import { Redirect } from 'react-router-dom'
import Navbar from '../Navigation/Navbar';


class SignIn extends React.Component {
	state = {
		userName: "",
		password: ""
	}


	handleChange = (event) => {
		const {id, value} = event.target
		this.setState({
			[id]: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

	}

	renderRedirect = () => {
		if (this.state.redirect == 1) {
		  return <Navbar isLogged={true}/>
		} 
	}

	setSignInRedirect = () => {

	}

	render() {
		return (
			<div>{this.renderRedirect()}
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="userName">User Name</label>
						<input type="text" id="userName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<button type="button" class="btn btn-primary btn-lg btn-block active" onClick={this.setSignInRedirect}>
							Sign In
						</button> 
					</div>

				</form>
			</div>
			</div>
		)

	}

}

export default SignIn