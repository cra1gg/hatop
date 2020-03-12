const initState = {
    loggedIn: false,
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
		case "SIGNIN_SUCCESS":
			return {
				...state,
				authError: null
			}

		case "SIGNIN_ERROR":
			return {
				...state,
				authError: "Login failed"
			}

		case "SIGNOUT_SUCCESS":
			return {
				...state,
				authError: null
			}

		case "SIGNOUT_ERROR":
			return {
				...state,
				authError: "signout error"
			}

		case "SIGNUP_SUCCESS":
			return {
				...state,
				authError: null
			}

		case "SIGNUP_ERROR":
			return {
				...state,
				authError: action.err.message
			}

		default:
			return state
	}
}

export default authReducer;
