import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logout from './Accounts/logout';
import './App.css';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/logout" component={logout}/>
        <Route exact path="/home2" component={Home2}/>
      </Router>
      
    </div>
  );
}

export default App;
