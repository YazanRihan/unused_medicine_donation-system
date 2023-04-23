import './App.css';
import * as React from 'react';
import pills from './images/pills.jpg';
import Button from '@mui/material/Button';

class App extends React.Component {
  render() {
    return (
    <div class="dividor">
      
      <div class="sloganC"> 
        
        <h1 class="slogan">Medicine Is Not A Book But Mind, Not A Business But Life.</h1> 
        
        <Button variant='contained' color='secondary' size='large' style={{width: '200px', height: '100px', color: '#ffffff', fontSize: '36px', marginTop: '100px'}}> Donate</Button>
         
      </div>
      
      <div class="pillsC">
        <img class="pills" src={pills} alt='Pills'></img>
      </div>
    </div>);
      
  }

  
}


export default App;