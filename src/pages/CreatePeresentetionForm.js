import React, { Component } from 'react';

class CreatePeresentetionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      conferenceName: '',
      conferenceDateTime: '',
      conferenceDuration: '',
      userName:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleInputChange = (event) => {
    this.setState({
      [event.target.onferenceName]: event.target.value,
      [event.target.conferenceDateTime]: event.target.value,
      [event.target.conferenceDuration]: event.target.value,
      [event.target.userName]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.userName);
    
    event.preventDefault();
  }

  handleSubmit(event) {
    console.log("Conference creation hadleSubmit started ....")
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(data.get('conferenceName'));
    console.log(data.get('conferenceDateTime'));
    console.log(data.get('conferenceDuration'));
    console.log(data.get('userName'));


    console.log(
      JSON.stringify({
        name : data.get('conferenceName'),
        lastname : data.get('conferenceDateTime'),
        job : data.get('conferenceDuration'),
        country :data.get('userName')
       })
    );

    fetch('http://localhost:8080/addConference', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name : data.get('conferenceName'),
        lastname : data.get('conferenceDateTime'),
        job : data.get('conferenceDuration'),
        country :data.get('userName')
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
              ConferenceDateTime:
              <input type="text" name='conferenceDateTime' onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              ConferenceDuration:
              <input type="text" name='conferenceDuration' onChange={this.handleChange} />
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
              Date:
              <input type="date" id="start" name="date"
                 min="2018-01-01" max="2018-12-31"  onChange={this.handleChange} ></input>
                 <input type="time" id="start" name="time"
                 min="2018-01-01" max="2018-12-31"  onChange={this.handleChange} ></input>
            </label>
          </tr>
          <tr>
            <label>
              Summary: 
              <textarea name="postContent" rows={4} cols={40}/>
            </label>
          </tr>
        </tr>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreatePeresentetionForm;