import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarContainer from "./containers/Navbar-container"
import Homepage from "./containers/Homepage-container";


function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Homepage} />
      
      
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
