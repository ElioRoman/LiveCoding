import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// eslint-disable-next-line import/no-unresolved
import Auth from "./Auth";

const rootElement = document.querySelector("#root");

ReactDOM.render( <Auth />, rootElement);