import React, { Component } from 'react';
import './App.css';
import Name from './cogsNsprockets/Name';
import PlanetDisplay from './cogsNsprockets/PlanetDisplay';
// import from './cogsNsprockets/';

class App extends Component {
  render() {
    return (
      <div id="firstBox">
        <Name />
        <PlanetDisplay />
      </div>
    );
  }
}

export default App;
