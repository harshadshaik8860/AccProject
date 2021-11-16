import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logout from './Accounts/logout';
import Dashboard from './components/Dashboard';
import Home from './Pages/Home';
import Header from './Pages/Header';

const App = () => {
  return (
    <div>
      <Router>
       <Route exact path="/" component={Home}/>
        <Route path="/logout" component={logout}/>
        <Route path="/dashboard" component={Dashboard}/>
        

        
      </Router>
      
    </div>
  );
}

export default App;
