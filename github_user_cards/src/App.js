import React from 'react';
import './App.css';
import axios from 'axios'

import GitHubCard from './Github_Data/GithubCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      github: [],
      followers: []
    }
  }


  componentDidMount(){
    const githubUser = axios.get('https://api.github.com/users/cleveroscar')
      .then((res) => this.setState({github: res.data}))
      .catch((err) => console.log(err))


    const userFollows = axios.get('https://api.github.com/users/cleveroscar/followers')
    .then((res) => this.setState({...this.state.github, follwers: res.data}))

    }

  
  render() {
      return (
      <div className="App">
        <GitHubCard data={this.state} />
      </div>
    );
  }
}

export default App;
 