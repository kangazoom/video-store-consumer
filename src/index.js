import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import MovieSearchForm from './components/MovieSearchForm';
import Library from './components/Library';
import Customers from './components/Customers';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/search" component={MovieSearchForm} />
      <Route path="/library" component={Library} />
      <Route path="/customers" component={Customers} />
    </div>
</Router>

)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
