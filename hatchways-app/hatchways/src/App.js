import React, { Component } from "react";
import "./App.css";
import Students from "./components/students";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Students />
      </main>
    );
  }
}

export default App;
