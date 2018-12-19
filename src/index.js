import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import MovieSearchForm from './components/MovieSearchForm';
import Library from './components/Library';
import Customers from './components/Customers';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
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
      <Route path="/" component={App} />
      <Route path="/search" component={MovieSearchForm} />
      <Route path="/library" component={Library} />
      <Route path="/customers" component={Customers} />
    </div>
</Router>

)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
