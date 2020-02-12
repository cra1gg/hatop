import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SignUp from "./components/Auth/SignUp"
import SignIn from "./components/Auth/SignIn"
import './App.css';

//function App() {

class App extends React.Component {
   render() {
      return (
        <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route path="/signup" component={SignUp} />
                      <Route path="/signin" component={SignIn} />
                  </Switch>
              </div>
          </BrowserRouter>
          </div>
      );
  }
}
  /*return (
    <div className="App">
      <header className="App-header">
      <form>
        <label>
          Username:
          <input type="text" name="username" />
          Password: 
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      </header>
    </div>
  ); */


export default App;
