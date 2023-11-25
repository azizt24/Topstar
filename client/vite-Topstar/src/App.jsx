import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Products from "./pages/products/Products";
import SignIn from "./pages/SignIn/SignIn";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products">
            <Products addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} />
          </Route>
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
