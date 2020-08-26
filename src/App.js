import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";
import BlankExample from "./components/FormComponent"

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <BlankExample/>
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
