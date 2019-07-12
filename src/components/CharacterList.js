import React, { Component } from "react";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { addCharactersById } from "../actions/index";
import "../styles/style.css";

class CharacterList extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(characters => {
            return (
              <li key={characters.id} className="list-group-item">
                <div className="list-item">{characters.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharactersById(characters.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { characters: state.characters };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharactersById }, dispatch);
// }
export default connect(
  mapStateToProps,
  { addCharactersById }
)(CharacterList);
