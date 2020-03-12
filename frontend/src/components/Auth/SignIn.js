import React from "react"
import axios from "axios"

class SignIn extends React.Component {
	state = {
		userName: "",
		password: "",
		error: "",
		success: ""
	}

	handleChange = (event) => {
		const {id, value} = event.target
		this.setState({
			[id]: value
		})

	}

	handleSubmit = (event) => {
		event.preventDefault();
		const userCreds = {
			username: this.state.userName,
			password: this.state.password
		}
		axios.post(`http://localhost:3000/user/login`, userCreds)
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
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign In</h5>
					<div className="input-field">
						<label htmlFor="userName">Username</label>
						<input type="text" id="userName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>

					<p id="error" style={{color:'red'}}>{this.state.error}</p>
					<p id="success" style={{color:'green'}}>{this.state.success}</p>

					<div className="input-field">
						<button type="submit" className="btn btn-primary btn-lg btn-block active" onClick={this.setSignInRedirect}>
							Sign In
						</button> 
					</div>

				</form>
			</div>
		)

	}

}

export default SignIn