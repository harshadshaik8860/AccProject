import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'


const Home = () => {
    return (
    <div>
    <header className='header'>
      <div >
        <Link  className='links' to='/'>
          BMS
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
           <Link  className="links" to='/dashboards'>
            Dashboards
          </Link>
         <button className="button"> <Link className="link" to='/logout'>
            Logout
          </Link></button>
        </ul>
      </nav>
    </header>


     <h1>Welcom Home</h1>
  </div>
        
    );
};

export default Home;