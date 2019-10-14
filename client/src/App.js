import React, { Component } from 'react';
import axios from 'axios';

import Players from './Players/Players';

import './App.css';
// import PlayerCard from './Players/PlayerCard';

// build class component with axios call to API http://localhost:5000/api/players
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players/')
      .then(response => {
        // console.log('Response', response)
        this.setState({
          players: response.data
        })
        console.log('after state', this.state.players)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Players!</h1>
        <Players players={this.state.players} />
      </div>
    );
  };
};