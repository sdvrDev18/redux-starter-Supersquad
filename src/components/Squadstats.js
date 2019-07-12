import React, { Component } from "react";
import { connect } from "react-redux";

class Squadstats extends Component {
  strength = () => {
    let strength = 0;
    this.props.heroes.forEach(hero => (strength += hero.strength));
    return strength;
  };
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength : </b>
            {this.strength()}
          </li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}
export default connect(
  mapStateToProps,
  null
)(Squadstats);
