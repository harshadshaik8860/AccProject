import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import './home.css';

const Header = () => {
    return (
        <div>
    <Navbar className="navbar" >

    <Navbar.Brand><Link  className="links" to="/">BMS</Link></Navbar.Brand>
    <Nav>
      <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/dashboard">Dashboard</Link></Nav.Link>

      <Nav.Link>
          <Button className="button">
          Logout
          </Button></Nav.Link>
         
    </Nav>
    
  </Navbar>
  
 <>
 </>

        </div>
    );
};

export default Header;