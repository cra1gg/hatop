import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import StudentStats from "./components/Info/StudentStats"
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
	                    <Route path="/studentstats" component={StudentStats}/>
                        <Route path="/enrollclass" component={EnrollClass}/>
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}


export default App;
