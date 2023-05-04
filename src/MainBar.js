import * as React from 'react'; // Import the necessary modules
import "./MainBar.css"; // Import the styles for the MainBar component
import logo from "./images/logo.png"; // Import the image file for the logo
import {Link} from 'react-router-dom'; // Import the Link component from React Router

class MainBar extends React.Component { // Define the MainBar component as a class component

    render () { // Define the render method for the component
        return (
           <div class="NavigationBar"> {/* Create a navigation bar wrapper */}
                
                <img alt='logo' class="NavItem" style={{width:'300px'}} src={logo}/> {/* Add the logo image to the navigation bar */}
                <div class="NavItem">< Link to="/Homepage" class="Link">Home</Link></div> {/* Add a Link to the Home page */}
                <div class="NavItem"><Link to="/About" class="Link">About</Link></div> {/* Add a Link to the About page */}
                <div class="NavItem" style={{backgroundColor: '#61dafb'}}><Link to="/SignIn" class="SignIn">Sign-In</Link></div> {/* Add a Link to the Sign-In page with a different background color */}
           </div> 

        );
    }
}

export default MainBar; // Export the MainBar component as the default export
