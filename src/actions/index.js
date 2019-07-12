export const ADD_CHARACTER = "ADD_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";

export function addCharactersById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  };
  return action;
}

export function deleteCharactersById(id) {
  const action = {
    type: DELETE_CHARACTER,
    id
  };
  return action;
}
