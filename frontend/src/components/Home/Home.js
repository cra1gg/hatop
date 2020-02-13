import React from "react"
import { Redirect } from 'react-router-dom'


class Home extends React.Component {

	state = {
		redirect: 0
	  }
	  setSignInRedirect = () => {
		this.setState({
		  redirect: 2
		})
	  }

	  setSignUpRedirect = () => {
		this.setState({
		  redirect: 1
		})
	  }

	  renderRedirect = () => {
		if (this.state.redirect == 2) {
		  return <Redirect to='/signin'/>
		} else if (this.state.redirect == 1){
			return <Redirect to='/signup' />
		}
	  }
	  render () {
		return (
			<div className="container">
			{this.renderRedirect()}
			<form className="white" onSubmit={this.handleSubmit}>
				<h5 className="grey-text text-darken-3">Welcome to Hatop</h5>
				<div className="input-field">
					<button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.setSignUpRedirect}>
									Sign Up
								</button>
				</div>
				<div className="input-field">
					<button type="button" class="btn btn-primary btn-lg btn-block active" onClick={this.setSignInRedirect}>
						Sign In
					</button> 
				</div>
			</form>
			</div>
		)
	  }
	}

export default Home