import * as React from 'react';  // Importing the React library and assigning it to the variable React
import pills from './images/pills.jpg';  // Importing an image of pills from the ./images/pills.jpg file and assigning it to the variable pills
import './Homepage.css';  // Importing the Homepage.css file

import Button from '@mui/material/Button';  // Importing the Button component from the Material UI library
import {Link} from 'react-router-dom';  // Importing the Link component from the React Router DOM library

class Homepage extends React.Component {  // Creating a new class component named Homepage that extends the React.Component class
    render() {  // Defining a render method for the Homepage component
        return (  // Return a JSX template that renders HTML elements and React components
            <div>  // A div element that wraps the JSX template
                <div class="dividor">  // A div element with class "dividor"
                    <div class="sloganC">  // A div element with class "sloganC"
                        <h1 class="slogan">Medicine Is Not A Book But Mind, Not A Business But Life.</h1>  // A header element with class "slogan" and a slogan text
                        <Button variant='contained' color='secondary' size='large' style={{width: '200px', height: '100px', color: '#ffffff', fontSize:'36px', marginTop:'100px'}}>  // A button element with variant, color, size, and style props
                            <Link to="/Donate" class="DonateLink">Donate</Link>  // A link element with to and class props that takes the user to the Donate page
                        </Button>  // Closing button tag
                    </div>  // Closing div tag
                    <div class="pillsC">  // A div element with class "pillsC"
                        <img class="pills" src={pills} alt='Pills'></img>  // An img element with class "pills" that displays the pills image
                    </div>  // Closing div tag
                </div>  // Closing div tag
                <div>  // A div element with no content
                </div>  // Closing div tag
            </div>  // Closing div tag
        )
    }  // Closing render method
}  // Closing Homepage class

export default Homepage;  // Exporting the Homepage component as the default export of the module.
