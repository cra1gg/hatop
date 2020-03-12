import React from "react"
import { useHistory } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import { Link } from "react-router-dom"


class SignIn extends React.Component {
	state = {
		userName: "",
		password: "",
		redirect: false
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
		if (this.state.redirect) {
			return false
		}
	}

	setRedirect = () => {
		this.setState({
			redirect: true
		  })
		this.render()
	}

	routeChange=()=> {
		let path = `/test`;
		let history = useHistory();
		history.push(path);
	  }

	render() {
		return (
			<div>
			<div>
				<Navbar isLogged={false}/>
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
					<Link to="/viewClasses" className="brand-logo" type="button" class="btn btn-primary btn-lg btn-block active">Sign In</Link>

				</form>
			</div>
			</div>
			</div>
		)

	}

}

export default SignIn