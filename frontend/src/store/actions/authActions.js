export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
        
        // Do some mongo stuff in this line
		/*.then( () => {
			dispatch({ type: "SIGNIN_SUCCESS" })
		})
		.catch( err => {
			dispatch({ type: "SIGNIN_ERROR", err: err })
		})*/
	}
}

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {

        // Do some mongo stuff in this line
        /*.then( () => {
			dispatch({ type: "SIGNOUT_SUCCESS"})
		})
		.catch( err => {
			dispatch({ type: "SIGNOUT_ERROR", err: err })
		})*/
	}
}
