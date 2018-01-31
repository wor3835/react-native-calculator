/*
Runs the main app.
*/

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { SolveFunc } from "./operations";
import Main from "./Main";

/*
Read state and dispatch changes.
*/
const store = createStore(SolveFunc);

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
