import React from "react"
import { Redirect } from 'react-router-dom'

function SignedOutLinks(props) {
    localStorage.clear();
    console.log(localStorage);
    console.log("SIGNED OUT")
    
    return(
        <div>
            <p>Signed out successfully.</p>
            {<Redirect to='' />}

        </div>
    )

}

export default SignedOutLinks;