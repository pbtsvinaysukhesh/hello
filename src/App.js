import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import otp from "./Components/OtpComponent"
import Login from "./Components/LoginComponent";
import SignUp from "./Components/SignupComponent";
import Welcome from './Components/WelcomeComponent';
import LastPage from './Components/LastPageComponent';
function App() {
  return (<Router>
    <div className="App">
      {/*  */}

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path="/login" component={Login} />
            {/* <Route path="/sign-up" component={SignUp} /> */}
            <Route path="/otp" component={otp} />
            <Route path="/dashboard" component={LastPage} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;