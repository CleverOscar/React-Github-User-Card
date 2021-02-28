import React from 'react';
import './App.css';
import axios from 'axios'

import GitHubCard from './Github_Data/GithubCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      github: []
    }
  }


  componentDidMount(){
    axios.get('https://api.github.com/users/cleveroscar')
      .then((res) => this.setState({github: res.data}))
      .catch((err) => console.log(err))
  }

  
  render() {
      return (
      <div className="App">
        Github User Cards
        <GitHubCard data={this.state.github} />
      </div>
    );
  }
}

export default App;
 