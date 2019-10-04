import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import Navbar from './components/Navbar';

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
      <Navbar />
      <div>
        {this.state.player.map(item => (
          <PlayerCard key={item.id} name={item.name} country={item.country} />
        ))}
      
      </div>
    </div>
  );
 }
}

export default App;
