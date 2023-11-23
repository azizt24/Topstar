// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/designs">Designs</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
 
      <div>
        <h1>Welcome to our Home Designs</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptas, quos, quibusdam, voluptate corrupti quae doloribus
          voluptatum, quia doloremque quod autem! Quisquam, voluptatum
          voluptates. Voluptate, quibusdam. Quas, voluptatum. Quisquam
          voluptas, quos, quibusdam, voluptate corrupti quae doloribus
          voluptatum, quia doloremque quod autem! Quisquam, voluptatum
          voluptates. Voluptate, quibusdam. Quas, voluptatum.
        </p>
      </div>
    </div>
  );
}

export default App;
