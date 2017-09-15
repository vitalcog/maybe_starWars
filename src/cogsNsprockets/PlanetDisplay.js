import React, { Component } from 'react';
import axios from 'axios';

class PlanetDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PlanetInfo: [],
    };
  }

  componentWillMount() {
    axios.get("https://swapi.co/api/planets/")
    .then(api => {
      console.log(api.data.results);
      this.setState( {
        PlanetInfo: api.data.results,
      });
    });
  }

  render() {
    const api = this.state.PlanetInfo;
    const thePlanets = api.map(spaceBanana => {
      return(
        <div id="uniqueDivOne" key={spaceBanana.name}>
          <ul>
            <li>Planet Name: {spaceBanana.name}</li>
            <li>Planet Size: {spaceBanana.diameter} space units</li>
            <li>Planet Climate: {spaceBanana.climate}</li>
            <li>Planet Gravity: {spaceBanana.gravity} space unit(s)</li>
            <li>Planet Terrain: {spaceBanana.terrain}</li>
            <li>Orbital Period: {spaceBanana.orbital_period} space units</li>
            <li id="loneLI">Population: {spaceBanana.population}</li>
            <img id="picture" src="/extraFlavors/liquid_schwartz.jpg" />

          </ul>
          <img id="picture2" src="/extraFlavors/SpaceGoons.jpg" />
        </div>
      );
    });
    return(
      <div>
        {thePlanets}
      </div>
    );
  }
}


export default PlanetDisplay;
