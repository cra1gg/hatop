import React from "react"


class SignUp extends React.Component {
	state = {
		email: "",
		firstName: "",
		lastName: ""
	}


	handleChange = (event) => {
		const {id, value} = event.target
		this.setState({
			[id]: value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		
		// Make this method later
		//this.props.signUp(this.state)
		
	}

	render() {
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleSubmit}>
					<h5 className="grey-text text-darken-3">Sign Up</h5>

					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="email">First Name</label>
						<input type="text" id="firstName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<label htmlFor="email">Last Name</label>
						<input type="text" id="lastName" onChange={this.handleChange}/>
					</div>

					<div className="input-field">
						<button>Sign Up</button>
					</div>

				</form>
			</div>
		)

	}

}

export default SignUp