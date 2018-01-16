import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link className="navlink" to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link className="navlink" to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link className="navlink" to="/contact">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;