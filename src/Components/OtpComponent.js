
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class otp extends Component {
    state={
        OTP:'',
        defaultOtp:"1356"
    }
    handleChange = (value) => this.setState({ OTP : value });
    verifyOtp =(value) =>{
        if(this.state.OTP === this.state.defaultOtp){
            this.props.history.replace( '/dashboard' );
            console.log('success')
        }
        else{
            console.log('fail')
        }
    }
    goBackToLogin = () =>{
        this.props.history.replace('./login')
    }
  render() {
    return (
    <div>
    <div style={{color:'blue',cursor:'pointer'}} onClick={this.goBackToLogin}> {"<Back"} </div>
    <div style={{textAlign:'center'}}>
        <div>Enter Otp</div>
        
          <p>Use otp 1356 to register</p>
        
        <div>
        <OtpInput
        inputStyle={{  
            width: '1rem',  
            height: '2rem',  
            margin: '20px 2rem',  
            fontSize: '1rem',  
            borderRadius: 4,  
            border: '2px solid rgba(0,0,0,0.3)',  
          }}  
            // onChange={otp => console.log(otp)}
            numInputs={4}
            separator={"-"}
            value={this.state.OTP}
            onChange={this.handleChange}
          />
        </div>
        <div style={{textAlign:'center'}}><button className="btn btn-primary btn-block" onClick={this.verifyOtp}>verify</button></div>
          </div>
          </div>
      
    )
  }
}
