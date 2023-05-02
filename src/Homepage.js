import * as React from 'react';
import pills from './images/pills.jpg';
import './Homepage.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';




class Homepage extends React.Component {
    render() {
        return (
            <div>
            
            
            <div class="dividor">
            
                <div class="sloganC"> 

                  <h1 class="slogan">Medicine Is Not A Book But Mind, Not A Business But Life.</h1> 

                  <Button variant='contained' color='secondary' size='large' style={{width: '200px', height: '100px', color: '#ffffff', fontSize:'36px', marginTop:'100px'}}><Link to="/Donate" class="DonateLink">Donate</Link></Button>

                </div>

                <div class="pillsC">
                  <img class="pills" src={pills} alt='Pills'></img>
                </div>
            </div>
            </div>
        )
    }
    
}



export default Homepage;