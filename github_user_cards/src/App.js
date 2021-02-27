import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

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



    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }


  
  render() {

      console.log(this.state)
      return (
      <div className="App">
        Github User Cars
      </div>
    );
  }
}

export default App;
 