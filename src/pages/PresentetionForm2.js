import { useState } from "react";
import React from 'react';

class PresentetionForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" onChange={this.handleInputChange} />
          </label>
        </form>
        <div>
          <h2>Your Input:</h2>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
        </div>
      </div>
    );
  }
}
export default PresentetionForm2;