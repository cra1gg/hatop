import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import CreateClass from "./teachers/classes/CreateClass"
import ManageClasses from "./teachers/classes/ManageClasses"


import './App.css';


class App extends React.Component {
   render() {
      return (
        <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/signup" component={SignUp} />
                      <Route path="/signin" component={SignIn} />
                      <Route path="/createClass" component={CreateClass} />
                      <Route path="/manageClasses" component={ManageClasses} />


                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}


export default App;
