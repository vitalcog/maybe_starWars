import React, { Component } from 'react';

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
  }

  updateName(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div id="welcome">
        <input
          id="pilotname"
          placeholder="what's your name brave pilot?"
          onChange={(event) => this.updateName(event)}
          value={this.state.name} />
        <h1 className="goldText">Welcome {this.state.name}! May the Schwartz be with you!
        </h1>
        <h2 className="goldText">Here is a list of planets in the local galactic area of poorly defined space units...
        </h2>
      </div>
    );
  }
}


export default Name;
