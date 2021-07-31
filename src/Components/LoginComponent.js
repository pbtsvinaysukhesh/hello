import React, { Component } from "react";

export default class Login extends Component {
    state={
        phoneNo:"",
        phoneValidation : false
      }
      onClick = (value) =>{
        //   console.log(value,row)
          this.phoneValidation(this.state.phoneNo)
      }
      changeNo = (event) =>{
          this.setState({
              phoneNo:event.currentTarget.value
          })
      }
      phoneValidation = (number) =>{
            let letter = /^\d{10}$/
            if(number.match(letter)){
                this.setState({
                    phoneValidation:false
                })
                this.props.history.replace('/otp')
                // this.props.history.replace( '/checkout/contact-data' );

            }
            else{
                this.setState({
                    phoneValidation:true
                })
            }

      }
    render() {
        return (
            <div>
                <h3>Register/Login</h3>

                <div style={{textAlign:'center'}}>
                    <input type="tel" name="telphone" value = {this.state.phoneNo} onChange = {this.changeNo} placeholder="Enter phone number" maxlength="10"  title="Ten digits code" required/>    
                    {/* <label style={{fontSize:"9px",paddingLeft:"20px"}}> Eg : 0812222224  </label>  */}
                    {/* <input type="submit" value="Submit"/> */}
                </div>

                <div style={{textAlign:'center',marginTop:'5px'}}>
                {
                
                this.state.phoneValidation && <div style={{textAlign:'center',color : 'red'}}>enter number in correct format</div> 
               }
                <button style={{textAlign:"center"}} className="btn btn-primary btn-block" onClick = {this.onClick}>Submit</button>
                </div>
                </div>
            
        );
    }
}