import React, { Component, useState } from 'react';
import './Donate.css'; // Import the CSS file you'll create later


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
        if (medicineType === '' || quantity === '' || expiry === '' || name === '')
        console.log('Medicine Type:', medicineType);
        console.log('quantity:', quantity);
        console.log('Expiry:', expiry);
        console.log('name:', name);

        this.setState({medicineType: '',
        quantity: '',
        expiry: '',
        name: ''});
    }

    render() {
        const {medicineType, quantity, expiry, name} = this.state;
        
        return (
            <div>

                <h1>Donate your Medicines</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select medicine type
                        <div>
                            <div id="Lotions" onClick={this.handleMedicineTypeChange}>Lotions</div>
                            <div id="Drops" onClick={this.handleMedicineTypeChange}>Drops</div>
                            <div id="Syrups" onClick={this.handleMedicineTypeChange}>Syrups</div>
                            <div id="Pills" onClick={this.handleMedicineTypeChange}>Pills</div>
                        </div>
                    </label>

                    <label>
                        Quantity
                        <input type="number" value={quantity} onChange={this.handleQuantityChange}></input>
                    </label>

                    <label>
                       Expiry date

                       <input type='string' value={expiry} onChange={this.handleExpiryChange}></input>
                    </label>

                    <label>
                        Name of medicine
                        <input type='string' value={name} onChange={this.handleNameChange}></input>

                    </label>

                    <div onClick={this.handleSubmit}>Submit</div>

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
