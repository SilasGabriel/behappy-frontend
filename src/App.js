import React, { Component } from "react";
import logo from "./img/logo.svg";

import "./App.css";
import Header from "./components/Header/Header";
import NewUser from "./components/NewUser/NewUser";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser />
      </div>
    );
  }
}

export default App;
