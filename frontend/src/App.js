import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import CreateClass from "./teachers/classes/CreateClass"
import ManageClasses from "./teachers/classes/ManageClasses"
import Home from "./components/Home/Home"
import StudentStats from "./components/Info/StudentStats"
import EnrolClass from "./components/Info/EnrolClass"
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
	                    <Route path="/studentstats" component={StudentStats}/>
                      <Route path="/enrolclass" component={EnrolClass}/>
                      <Route path="" component={Home} />
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}


export default App;
