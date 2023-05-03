import React, { Component } from 'react';
import './Donate.css'; // Import the CSS file you'll create later
import Button from '@mui/material/Button';

class DonateForm extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            medicineType: '',
            quantity: '',
            expiry: '',
            name: '',
        }

        
    }

    handleMedicineTypeChange = (event) => {
        const Lotions = document.getElementById('Lotions')
        const Drops = document.getElementById('Drops')
        const Syrups = document.getElementById('Syrups')
        const Pills = document.getElementById('Pills')
        Lotions.style.backgroundColor = "#cccccc";
        Drops.style.backgroundColor = "#cccccc";
        Syrups.style.backgroundColor = "#cccccc";
        Pills.style.backgroundColor = "#cccccc";
        event.target.style.backgroundColor = '#57b9da';
        this.setState({medicineType: event.target.id});
    }
    handleQuantityChange = (event) => {
        this.setState({quantity: event.target.value});
    }
    handleExpiryChange = (event) => {
        this.setState({expiry: event.target.value});
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {medicineType, quantity, expiry, name} = this.state;

        if (medicineType === '' || quantity === '' || expiry === '' || name === '') {
            window.alert("Please fill all the fields");
        }
        else {

            console.log('Medicine Type:', medicineType);
            console.log('quantity:', quantity);
            console.log('Expiry:', expiry);
            console.log('name:', name);
            
            const Lotions = document.getElementById('Lotions')
            const Drops = document.getElementById('Drops')
            const Syrups = document.getElementById('Syrups')
            const Pills = document.getElementById('Pills')
            Lotions.style.backgroundColor = "#cccccc";
            Drops.style.backgroundColor = "#cccccc";
            Syrups.style.backgroundColor = "#cccccc";
            Pills.style.backgroundColor = "#cccccc";
            
            this.setState({medicineType: '',
            quantity: '',
            expiry: '',
            name: ''});
        }
    }

    render() {
        const {quantity, expiry, name} = this.state;
        
        return (
            <div class="formDiv">

                <h1 class="subtitle">Make your requests</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h2 class='formLabel'>Select medicine type:</h2>
                        <div class="medicineTypesContainer">
                            <div class="typeBox" id="Lotions" onClick={this.handleMedicineTypeChange}>Lotions</div>
                            <div class="typeBox" id="Drops" onClick={this.handleMedicineTypeChange}>Drops</div>
                            <div class="typeBox" id="Syrups" onClick={this.handleMedicineTypeChange}>Syrups</div>
                            <div class="typeBox" id="Pills" onClick={this.handleMedicineTypeChange}>Pills</div>
                        </div>
                    </label>

                    <label>
                    <h2 class='formLabel'>Quantity:</h2>
                        
                        <input placeholder="Enter the quantity with the unit" type="text" value={quantity} onChange={this.handleQuantityChange}></input>
                    </label>

                    <label>
                    <h2 class='formLabel'>Expiry Date:</h2>
                       
                       <input class="dateInput" type='date' value={expiry} onChange={this.handleExpiryChange}></input>
                    </label>

                    <label>
                    <h2 class='formLabel'>Name of Medicine</h2>
                        
                        <input placeholder='Enter the name of the medicine' type='string' value={name} onChange={this.handleNameChange}></input>
                    </label>
                    <br/>
                    <Button onClick={this.handleSubmit} variant='contained' color='secondary' size='large' style={{width: '85px', height: '40px', color: '#ffffff', fontSize:'20px', marginTop:'20px'}}>Submit</Button>

                </form>

            </div>

        )
    }
}


class Donate extends Component {
  render() {
    return (
      <DonateForm/>
    );
  }
}

export default Donate;
