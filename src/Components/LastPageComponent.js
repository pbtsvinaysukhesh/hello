import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class LastPage extends Component {
    render() {
        return (
            <form>
               <div style={{textAlign:'center'}}>You have logged in successfully</div>
               <div style={{textAlign:'center'}}>This is Dashboard</div>


            </form>
        );
    }
}