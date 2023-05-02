import * as React from 'react';
import pills from './images/pills.jpg';
import './About.css';
import Button from '@mui/material/Button';
import MainBar from './MainBar';
import Route from './Route';




class About extends React.Component {
    render() {
        return (
            
            <Route href="About">
                <div>
                    <h1>Hello</h1>
                </div>
            </Route>
            
        )
    }
    
}



export default About;