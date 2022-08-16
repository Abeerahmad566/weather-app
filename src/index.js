import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//wrapping our app in context proider so all our functions or components can use context provider api or context api
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
