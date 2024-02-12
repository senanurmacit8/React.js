import React, { Component } from 'react';


class PresentetionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <tr>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <tr>
            <label>
              LastName:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </tr>
          <tr>
            <label>
              Gender:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
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