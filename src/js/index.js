//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/Counter";

//render your react application
// 0.1 inicializar el my_counter en 0
// 1. crear funcion setinterval cada 1 segundo
// 2.1 dentro de la funcion setinterval poner como parametro el reactdom.render 
// 2.2 incrementar el prop del componente  my_counter
ReactDOM.render(<Home />, document.querySelector("#app"));


let counter = 0;
setInterval(() => {
    // render your react application
    console.log(counter)
    ReactDOM.render(<SecondsCounter counter={counter}/>, document.querySelector(".crono"));
    // incremento el contador
    counter++;
},10);
