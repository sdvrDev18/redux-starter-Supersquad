import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroesList from "./HeroesList";
import Squadstats from "./Squadstats";
import "../styles/style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Supersquad</h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroesList />
        </div>
        <div className="col-md-4">
          <Squadstats />
        </div>
      </div>
    );
  }
}

export default App;
