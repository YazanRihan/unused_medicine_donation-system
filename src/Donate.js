import React, { Component } from 'react';
import './Donate.css'; // Import the CSS file you'll create later
import Button from '@mui/material/Button';

// Define the DonateForm component
class DonateForm extends Component {

    constructor(props) {
        super(props); 
        // Set the initial state of the component
        this.state = {
            medicineType: '',
            quantity: '',
            expiry: '',
            name: '',
        }
    }

    // Handler function for when a medicine type is selected
    handleMedicineTypeChange = (event) => {
        // Get references to the medicine type boxes
        const Lotions = document.getElementById('Lotions')
        const Drops = document.getElementById('Drops')
        const Syrups = document.getElementById('Syrups')
        const Pills = document.getElementById('Pills')
        // Set the background color of all medicine type boxes to gray
        Lotions.style.backgroundColor = "#cccccc";
        Drops.style.backgroundColor = "#cccccc";
        Syrups.style.backgroundColor = "#cccccc";
        Pills.style.backgroundColor = "#cccccc";
        // Set the background color of the selected medicine type box to blue
        event.target.style.backgroundColor = '#57b9da';
        // Update the component state with the selected medicine type
        this.setState({medicineType: event.target.id});
    }

    // Handler function for when the quantity input changes
    handleQuantityChange = (event) => {
        // Update the component state with the entered quantity
        this.setState({quantity: event.target.value});
    }

    // Handler function for when the expiry date input changes
    handleExpiryChange = (event) => {
        // Update the component state with the entered expiry date
        this.setState({expiry: event.target.value});
    }

    // Handler function for when the name input changes
    handleNameChange = (event) => {
        // Update the component state with the entered name
        this.setState({name: event.target.value});
    }

    // Handler function for when the form is submitted
    handleSubmit = (event) => {
        event.preventDefault();
        // Get the current state of the component
        const {medicineType, quantity, expiry, name} = this.state;

        // Check if all form fields are filled out
        if (medicineType === '' || quantity === '' || expiry === '' || name === '') {
            // Display an error message if any fields are missing
            window.alert("Please fill all the fields");
        }
        else {
            // Log the form data to the console
            console.log('Medicine Type:', medicineType);
            console.log('quantity:', quantity);
            console.log('Expiry:', expiry);
            console.log('name:', name);
            
            // Get references to the medicine type boxes
            const Lotions = document.getElementById('Lotions')
            const Drops = document.getElementById('Drops')
            const Syrups = document.getElementById('Syrups')
            const Pills = document.getElementById('Pills')
            // Set the background color of all medicine type boxes to gray
            Lotions.style.backgroundColor = "#cccccc";
            Drops.style.backgroundColor = "#cccccc";
            Syrups.style.backgroundColor = "#cccccc";
            Pills.style.backgroundColor = "#cccccc";
            
            // Reset the component state to clear the form inputs
            this.setState({
                medicineType: '',
                quantity: '',
                expiry: '',
                name: ''
            });
        }
    }

    render() { // Define the render method for the component
        const {quantity, expiry, name} = this.state; // Get the current state of the component
        
        return (
            <div class="formDiv">

                <h1 class="subtitle">Make your requests</h1> {/* Add a subtitle */}
                <form onSubmit={this.handleSubmit}> {/* Create a form wrapper */}
                    <label>
                        <h2 class='formLabel'>Select medicine type:</h2> {/* Add a label for the medicine type input */}
                        <div class="medicineTypesContainer"> {/* Create a container for the medicine type boxes */}
                            <div class="typeBox" id="Lotions" onClick={this.handleMedicineTypeChange}>Lotions</div> {/* Add a medicine type box */}
                            <div class="typeBox" id="Drops" onClick={this.handleMedicineTypeChange}>Drops</div>     {/* Add a medicine type box */}
                            <div class="typeBox" id="Syrups" onClick={this.handleMedicineTypeChange}>Syrups</div>   {/* Add a medicine type box */}
                            <div class="typeBox" id="Pills" onClick={this.handleMedicineTypeChange}>Pills</div>     {/* Add a medicine type box */}
                        </div>
                    </label>

                    <label>
                    <h2 class='formLabel'>Quantity:</h2> {/* Add a label for the quantity input */}
                        
                        <input placeholder="Enter the quantity with the unit" type="text" value={quantity} onChange={this.handleQuantityChange}></input>    {/* Add a quantity input */}
                    </label>

                    <label>
                    <h2 class='formLabel'>Expiry Date:</h2> {/* Add a label for the expiry date input */}
                       
                       <input class="dateInput" type='date' value={expiry} onChange={this.handleExpiryChange}></input> {/* Add an expiry date input */}
                    </label>

                    <label>
                    <h2 class='formLabel'>Name of Medicine</h2> {/* Add a label for the name input */}
                        
                        <input placeholder='Enter the name of the medicine' type='string' value={name} onChange={this.handleNameChange}></input> {/* Add a name input */}
                    </label>
                    <br/>
                    <Button onClick={this.handleSubmit} variant='contained' color='secondary' size='large' style={{width: '85px', height: '40px', color: '#ffffff', fontSize:'20px', marginTop:'20px'}}>Submit</Button>
                     {/* Add a submit button */}

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
