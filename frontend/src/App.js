import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import SignOut from "./components/Auth/SignOut"
import CreateClass from "./teachers/classes/CreateClass"
import ManageClasses from "./teachers/classes/ManageClasses"
import ViewClasses from "./students/classes/ManageClasses"
import Home from "./components/Home/Home"
import StudentStats from "./components/Info/StudentStats"
import EnrolClass from "./components/Info/EnrolClass"
import QuizBuilder from "./components/Quiz/QuizBuilder/QuizBuilder";
import QuizView from "./components/Quiz/QuizTaker/QuizView";
import QuizTaker from "./components/Quiz/QuizTaker/QuizTaker";
import Navbar from './components/Navigation/Navbar';
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
                      <Route path="/signOut" component={SignOut} />
                      <Route path="/createClass" component={CreateClass} />
                      <Route path="/manageClasses" component={ManageClasses} />
	              <Route path="/studentstats" component={StudentStats}/>
                      <Route path="/viewclasses" component={ViewClasses}/> 
                      <Route path="/enrolclass" component={EnrolClass}/>
	              <Route path="/quizbuilder" component={QuizBuilder}/>
	              <Route exact path="/quizzes" component={QuizView}/>
	              <Route exact path="/quizzes/:quiz_id" component={QuizTaker}/>
	              <Route path="" component={Home}/>
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}


export default App;
