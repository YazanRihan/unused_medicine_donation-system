import * as React from 'react';
import "./MainBar.css";
import logo from "./images/logo.png";
import {Link} from 'react-router-dom';

class MainBar extends React.Component {
    
    
    
    render () {
        return (
           <div class="NavigationBar">
                
                <img alt='logo' class="NavItem" style={{width:'300px'}} src={logo}/>
                <div class="NavItem">< Link to="/Homepage" class="Link">Home</Link></div>
                <div class="NavItem"><Link to="/About" class="Link">About</Link></div>
                <div class="NavItem" style={{backgroundColor: '#61dafb'}}><Link to="/SignIn" class="SignIn">Sign-In</Link></div>
           </div> 

        );
    }
}

export default MainBar;