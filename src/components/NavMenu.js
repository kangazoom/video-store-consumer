import React from 'react';
import { Link } from 'react-router-dom'
import './NavMenu.css';

const NavMenu = () => {
  return (
    <div>
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <button type="button" className="btn btn-secondary btn-lg">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <button type="button" className="btn btn-secondary btn-lg">Search</button>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <button type="button" className="btn btn-secondary btn-lg">Library</button>
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <button type="button" className="btn btn-secondary btn-lg">Customers</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu;
