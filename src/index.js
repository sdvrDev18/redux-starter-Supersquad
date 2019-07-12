import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import rootReducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { addCharactersById } from "./actions/index";

const store = createStore(rootReducer);
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(addCharactersById(3));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
