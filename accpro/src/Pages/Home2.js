import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css'
const Home2 = () => {
    return (
        <div>
    <Navbar className="navbar" >
    <Container className="container">
    <Navbar.Brand><Link  className="links" to="/">BMS</Link></Navbar.Brand>
    <Nav>
      <Nav.Link><Link className="links" to="/home2">Home</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/logout">Features</Link></Nav.Link>
      
      <Nav.Link>
          <Button className="button">
          <Link className="link" to="/logout">Logout</Link>
          </Button></Nav.Link>
         
    </Nav>
    </Container>
  </Navbar>

        </div>
    );
};

export default Home2;