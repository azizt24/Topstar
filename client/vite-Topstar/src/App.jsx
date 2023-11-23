 


 

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home.jsx";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


 
