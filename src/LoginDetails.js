import React from 'react';
import ReactDOM, { render } from 'react-dom';

class LoginDetails extends React.Component {

    render(){
        return(
             <form align="centre">
             <label>User Name*:</label>
             <br/><input value={this.props.userNameDefault} placeholder="Username" className="login-details" type="text" name="userName" align= "right" onChange = {e => this.props.handleChange(e)}/>
             <br/>
             <label>Password*:</label>
             <br/><input value={this.props.passwordDefault} placeholder="New password" className="login-details" type="password" name="password" align= "right" onChange = {e => this.props.handleChange(e)}/>
             </form>
        );
    }
}

export default LoginDetails;