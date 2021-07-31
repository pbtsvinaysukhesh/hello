import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Welcome extends Component {
    render() {
        return (
            <form>
               <div style={{textAlign:'center'}}> Welcome To My Dashboard</div>
               <div style={{textAlign:'center'}}><Link className="nav-link" to={"/login"}>Continue</Link></div>

                {/* <button type="submit" className="btn btn-primary btn-block">Continue</button> */}

            </form>
        );
    }
}