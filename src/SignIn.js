import React, { Component } from 'react';
import './SignIn.css'; // Import the CSS file you'll create later
import Button from '@mui/material/Button';
class SignUp extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            username: '',
            password: '',
            reenterPassword: '',
            phoneNumber: '',
            address: ''
        }

        
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    handleReenterPasswordChange = (event) => {
        this.setState({reenterPassword: event.target.value});
    }
    handlePhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }
    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {email, username, password, reenterPassword, phoneNumber, address} = this.state;

        if (email === '' || username === '' || password === '' || reenterPassword === '' || phoneNumber === '' || address === '') {
            window.alert("Please fill all the fields");
        }
        else if (password !== reenterPassword) {
            window.alert("Passwords do not match");
        }
        else {

            console.log('Email:', email);
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Re-enter Password:', reenterPassword);
            console.log('Phone Number:', phoneNumber);
            console.log('Address:', address);
            
            this.setState({
                email: '',
                username: '',
                password: '',
                reenterPassword: '',
                phoneNumber: '',
                address: ''
            });
        }
    }

    render() {
        const {email, username, password, reenterPassword, phoneNumber, address} = this.state;
        
        return (
            <div className="formDiv">
                <h1 className="subtitle">Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2 className='formLabel'>Email:</h2>
                        <input placeholder="Enter your email" type="email" value={email} onChange={this.handleEmailChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Username:</h2>
                        <input placeholder="Enter your username" type="text" value={username} onChange={this.handleUsernameChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Password:</h2>
                        <input placeholder="Enter your password" type='password' value={password} onChange={this.handlePasswordChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Re-enter Password:</h2>
                        <input placeholder="Re-enter your password" type='password' value={reenterPassword} onChange={this.handleReenterPasswordChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Phone Number:</h2>
                        <input placeholder="Enter your phone number" type='text' value={phoneNumber} onChange={this.handlePhoneNumberChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Address:</h2>
                        <textarea placeholder="Enter your address" value={address} onChange={this.handleAddressChange}></textarea>
                    </label>
                    <br/>
                    <Button onClick={this.handleSubmit} variant='contained' color='secondary' size='large' style={{width: '85px', height: '40px', color: '#ffffff', fontSize:'20px', marginTop:'20px'}}>Submit</Button>

                </form>

            </div>

        )
    }
}


class SignIn extends Component {
  render() {
    return (
      <SignUp/>
    );
  }
}

export default SignIn;
