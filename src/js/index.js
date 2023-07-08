//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/Counter";
ReactDOM.render(<Home />, document.querySelector("#app"));


let counter = 0;
setInterval(() => {
    ReactDOM.render(<SecondsCounter counter={counter}/>, document.querySelector(".crono"));    
    counter++;
},10);
