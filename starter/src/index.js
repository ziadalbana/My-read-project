import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter } from 'react-router-dom' 
// const routing = (  
//   <Router>
//      <Route exact path="/" component={App} />  
//      <Route path="/search" component={SearchPage} /> 
//   </Router>  
// )  

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
