import React, { Component } from "react";
import "../styles/style.css";
import { connect } from "react-redux";
import { deleteCharactersById } from "../actions/index";

class HeroesList extends Component {
  render() {
    return (
      <div>
        <h4> Your Heroes Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map(hero => {
            console.log("newhero", this.props.heroes);
            return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.deleteCharactersById(hero.id)}
                >
                  -
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapSateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(
  mapSateToProps,
  { deleteCharactersById }
)(HeroesList);
