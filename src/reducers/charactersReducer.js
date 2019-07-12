import characters_json from "../data/characters.json";
import { ADD_CHARACTER, DELETE_CHARACTER } from "../actions/index";
import createCharacter from "../helpers/index";

export default function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case DELETE_CHARACTER:
      let newCharacters = [...state, createCharacter(action.id)];
      return newCharacters;
    default:
      return state;
  }
}
