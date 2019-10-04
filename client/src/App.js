import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard'

class App extends React.Component {
  state = {
    player: []
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        player: res.data
      });
    })
    .catch(err => console.log(err))
  }

render() {
  return (
    <div className="App">
      <h1>World Cup Soccer Players</h1>
      <div className="player-card">
        {this.state.player.map(item => (
          <PlayerCard key={item.id} name={item.name} country={item.country} />
        ))}
      
      </div>
    </div>
  );
 }
}

export default App;
