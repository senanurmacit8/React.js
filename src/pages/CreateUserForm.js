import React, { Component } from 'react';


class PresentetionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastname:'',
      job:'',
      country:''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.lastname]: event.target.value,
      [event.target.job]: event.target.value,
      [event.target.country]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    alert('A name was submitted: ' + this.state.lastname);
    
    event.preventDefault();
  }

  handleSubmit(event) {
    console.log(" hadleSubmit started....")
    event.preventDefault();

    const data = new FormData(event.target);

    console.log(data.get('name'));
    console.log(data.get('lastname'));
    console.log(data.get('job'));
    console.log(data.get('country'));


    console.log(
      JSON.stringify({
        name : data.get('name'),
        lastname : data.get('lastname'),
        job : data.get('job'),
        country :data.get('country')
       })
    );

    fetch('http://localhost:8080/createUser', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name : data.get('name'),
        lastname : data.get('lastname'),
        job : data.get('job'),
        country :data.get('country')
       })
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <tr>
          <label>
            Name:
            <input type="text" name='name' onChange={this.handleChange} />
          </label>
          <tr>
            <label>
              LastName:
              <input type="text" name='lastname' onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              Job:
              <input type="text" name='job' onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              Country:
              <input type="text" name='country' onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              Date:
              <input type="date" id="start" name="trip-start"
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

export default PresentetionForm;