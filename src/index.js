import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import reducer from "./redux/reducer";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
