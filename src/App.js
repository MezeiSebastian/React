import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">App with Redux !</h1>
        <Counter/>
      </div>
    );
  }
}

export default App;
