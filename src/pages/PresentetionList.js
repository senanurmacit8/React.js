import React, { Component } from 'react';

class PresentetionList extends Component {
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

    const data = [{ "name": "test1", "lastname": "lastnameTest" },
    { "name": "test2", "lastname": "lastnameTest" },
    { "name": "test2", "lastname": "lastnameTest" }];




    return (

      <div>

        <div>
          <tbody>
            {data.map((item) => {       
                                       // changed here
              console.log('item: ', item);

              return (
                <tr>
                  {Object.entries(item).map((field) => {        // changed here
                    console.log('field: ', field);

                    return (
                      <td>{field[1]}</td>
                      )
                  })}
                </tr>
              );
            })}
          </tbody>
        </div>

      </div>

    );
  }
}

export default PresentetionList;