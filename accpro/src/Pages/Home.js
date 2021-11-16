import React from 'react';
import Dashboard from '../components/Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';

const  Home = (props)=> {
    return (
        <div>
            <Header />
            {/* <div className="row mt-2">
                <div className="col-lg-3">
                    <ul className="list-group text-center">
                        <li className="list-group-item color">Dashboards</li>
                        <li className="list-group-item"> 
                        <Link to="/dashboard"> Portfolio Dashboards</Link>
                        </li>
                        <li className="list-group-item"> Study Dashboards</li>

                    </ul>
                </div>
                </div> */}

                <div className="container">
                    <h1 className="mt-5"> DASHBOARDS</h1>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Portfolio DashBoard
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Study DashBoard
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Functional DashBoard
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Portfolio DashBoard
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Study DashBoard
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card text-center p-5">
                                <div className="card-body">
                                    Functional DashBoard
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
        </div>
    );
}

export default Home;