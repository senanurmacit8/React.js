import React, { Component } from 'react';


class PresentetionForm extends Component {

  constructor(props) {
    super(props);

    this.name = { value: '' };
    this.lastname = {value : ''};
    this.job ={value:''};
    this.country={value:''};
    this.time={value:''};
    this.date={value: new Date()};


    this.handleChangeName=this.handleChangeName.bind(this);
    this.handleChangeLastName=this.handleChangeLastName.bind(this);
    this.handleChangeJob=this.handleChangeJob.bind(this);
    this.handleChangeCountry=this.handleChangeCountry.bind(this);
    this.handleChangeTime=this.handleChangeTime.bind(this);
    this.handleChangeDate=this.handleChangeDate.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChangeName(event) {
    this.setState({name :event.target.value});
      }


  handleChangeLastName(event) {
    this.setState({ lastname : event.target.value });
  }

  handleChangeJob(event) {
    this.setState({ job: event.target.value });
  }

  handleChangeCountry(event) {
    this.setCountry({ country: event.target.value });
  }

  handleChangeTime(event) {
    this.setTime({ time: event.target.value });
  }

  handleChangeDate(event) {
    this.setDate({ date: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.name.value);
    
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    console.log(data.get('name'));

    fetch('http://localhost:8080/createUser', {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <tr>
          <label>
            Name:
            <input type="text" value={this.name.value} onChange={this.handleChangeName} />
          </label>
          <tr>
            <label>
              LastName:
              <input type="text" value={this.lastname.value} onChange={this.handleChangeLastName} />
            </label>
          </tr>
          <tr>
            <label>
              Job:
              <input type="text" value={this.job.value} onChange={this.handleChangeJob} />
            </label>
          </tr>
          <tr>
            <label>
              Time:
              <input type="text" value={this.time.value} onChange={this.handleChangeTime} />
            </label>
          </tr>
          <tr>
            <label>
              Date:
              <input type="date" id="start" name="trip-start"
                 min="2018-01-01" max="2018-12-31" value={this.date.value} onChange={this.handleChangeDate} ></input>
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