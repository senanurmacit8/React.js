import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class CreatePeresentetionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      conferenceName: '',
      conferenceDuration: '',
      userName: '',
      islightningSelectedRadioButton: false
    };

    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange = (event) => {
    this.setState({
      [event.target.conferenceName]: event.target.value,
      [event.target.conferenceDuration]: event.target.value,
      [event.target.userName]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.userName);

    event.preventDefault();
  }

/*
  handleChangeRadio(event) {
    if (event == 'lightning') {

      this.state.islightningSelectedRadioButton = true;
    } else { this.state.islightningSelectedRadioButton = false; }


    alert('Your conference duration has been lightning. (5 min) ' + this.state.islightningSelectedRadioButton);
  }
  */

  handleChangeRadio = (value) => {
/*    this.setState({
      islightningSelectedRadioButton: value,
    });*/

    if(value=='lightning'){
      this.setState({
        islightningSelectedRadioButton: true,
      });

      this.setState({
        conferenceDuration: '5',
      });

    }else {
      this.setState({
        islightningSelectedRadioButton: false,
      });
    }
  };


  handleSubmit(event) {
    console.log("Conference creation hadleSubmit started ....")
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(data.get('conferenceName'));
    console.log(data.get('conferenceDuration'));
    console.log(data.get('userName'));


    console.log(
      JSON.stringify({
        name: data.get('conferenceName'),
        job: data.get('conferenceDuration'),
        country: data.get('userName')
      })
    );

    fetch('http://localhost:8080/addConference', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: data.get('conferenceName'),
        lastname: data.get('conferenceDateTime'),
        job: data.get('conferenceDuration'),
        country: data.get('userName')
      })
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <tr>
          <label>
            ConferenceName:
            <input type="text" name='conferenceName' onChange={this.handleChange} />
          </label>
          <tr>
            <label>
              <RadioGroup name='radioButton' onChange={this.handleChangeRadio} horizontal>
                <RadioButton value="lightning" > lightning </RadioButton>
                <RadioButton value="min" > min</RadioButton>
              </RadioGroup>
            </label>
          </tr>
          <tr>            
            <label >
              ConferenceDuration: 
              <input type="text" name='conferenceDuration2'
                hidden={!this.state.islightningSelectedRadioButton} value='5'
                onChange={this.handleChange} />

              <input type="text" name='conferenceDuration'
                hidden={this.state.islightningSelectedRadioButton}
                onChange={this.handleChange} />
              min.
            </label>
          </tr>
          <tr>
            <label>
              UserName:
              <input type="text" name='userName' onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              Summary:
              <textarea name="postContent" rows={4} cols={40} />
            </label>
          </tr>
        </tr>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreatePeresentetionForm;