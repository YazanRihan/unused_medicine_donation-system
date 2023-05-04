import React, { Component } from 'react';
import './SignIn.css'; // Import the CSS file you'll create later
import Button from '@mui/material/Button';

class SignUp extends Component {

    constructor(props) {
        super(props); 

        // Define initial state of component with empty strings for form fields
        this.state = {
            email: '',
            username: '',
            password: '',
            reenterPassword: '',
            phoneNumber: '',
            address: ''
        }
    }
// This function updates the 'email' property in the component state to the new value
//entered by the user in the email input field
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    // This function updates the 'username' property in the component state to the new value
    //entered by the user in the username input field
    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    // This function updates the 'password' property in the component state to the new value 
    //entered by the user in the password input field
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    // This function updates the 'reenterPassword' property in the component state to the new value
    //entered by the user in the re-enter password input field
    handleReenterPasswordChange = (event) => {
        this.setState({reenterPassword: event.target.value});
    }
    // This function updates the 'phoneNumber' property in the component state to the new value
    //entered by the user in the phone number input field
    handlePhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    //This function updates the 'address' property in the component state to the new value
    //entered by the user in the address input field
    handleAddressChange = (event) => {
        this.setState({address: event.target.value});
    }

    // This function is called when the form is submitted
    handleSubmit = (event) => { // The event argument is the form submit event
        event.preventDefault(); // Prevent the default form submit action, which reloads the page
        const {email, username, password, reenterPassword, phoneNumber, address} = this.state; // Get the current state of the component

        if (email === '' || username === '' || password === '' || reenterPassword === '' || phoneNumber === '' || address === '') { // Check if any of the fields are empty
            window.alert("Please fill all the fields"); // If any of the fields are empty, display an alert
        }
        else if (password !== reenterPassword) {
            window.alert("Passwords do not match"); // If the passwords do not match, display an alert
        }
        else {

            console.log('Email:', email);   //Print the values of the form fields to the console
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Re-enter Password:', reenterPassword);
            console.log('Phone Number:', phoneNumber);
            console.log('Address:', address);
            
            this.setState({ // Reset the state of the component to empty strings for all form fields
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
        const {email, username, password, reenterPassword, phoneNumber, address} = this.state; // Get the current state of the component
        
        return (
            <div className="formDiv"> {/* Create a div wrapper for the form */}
                <h1 className="subtitle">Sign In</h1>  {/* Add a title to the form */}
                <form onSubmit={this.handleSubmit}>     {/* Add a submit handler to the form */}
                    <label> {/* Create a label for the email input field */}
                        <h2 className='formLabel'>Email:</h2>   {/* Add a title to the email input field */}
                        <input placeholder="Enter your email" type="email" value={email} onChange={this.handleEmailChange}></input>
                    </label>

                    <label>
                        <h2 className='formLabel'>Username:</h2> 
                        <input placeholder="Enter your username" type="text" value={username} onChange={this.handleUsernameChange}></input> {/* Add a title to the username input field */}
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
                     {/* Add a submit button to the form */}
                    
                </form>

            </div>

        )
    }
}


class SignIn extends Component { // Create a component for the sign in page
  render() {
    return (
      <SignUp/> // Render the sign in form
    );
  }
}

export default SignIn; // Export the sign in component
