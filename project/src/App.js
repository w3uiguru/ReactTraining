import React, { Component } from "react";
import logo from "./logo.svg";
import Root from "./components/root/rootContainer"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
       <Root />
       </div>
      </div>
    );
  }
}

export default App;
