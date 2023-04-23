import * as React from 'react';
import "./MainBar.css"
import logo from "./images/logo.png"

class MainBar extends React.Component {
    
    handleClick = (link) => {
        console.log(link);
    }
    
    render () {
        return (
           <div class="NavigationBar">
                
                <img onClick={() => this.handleClick("./Home")} class="NavItem" style={{width:'300px'}} src={logo}/>
                <div onClick={() => this.handleClick("./Home")} class="NavItem">Home</div>
                <div onClick={() => this.handleClick("./Home")} class="NavItem">About</div>
                <div onClick={() => this.handleClick("./Home")} class="NavItem" style={{backgroundColor: '#61dafb'}}>Sign-In</div>
           </div> 

        );
    }
}

export default MainBar;