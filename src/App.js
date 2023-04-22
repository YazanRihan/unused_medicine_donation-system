import logo from './logo.svg';
import './App.css';
import React from 'react';
import pills from './images/pills.jpg'

class App extends React.Component {
  render() {
    return <dev class="dividor">
      <dev class="sloganC"> 
        <h1 class="slogan">Medicine Is Not A Book But Mind, Not A Business But Life</h1> 
        <button> Donate</button>
      </dev>
      <dev class="pillsC">
        <img class="pills" src={pills} alt='Pills'></img>
      </dev>
    </dev>;
      
  }
}

export default App;