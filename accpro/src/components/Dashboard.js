import React, {useRef,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import Header from '../Pages/Header';

const  Dashboard = (props) => {

    const {tableau} = window;

    const ref= useRef(null);

    const [url] = useState("http://public.tableau.com/views/RegionalSampleWorkbook/Storms")

    const initViz = ()=>{

        new tableau.Viz(ref.current, url);

    }

    useEffect(() =>{
        initViz()
    })

    return (
    
       <>
        <Header />
            <div className="row mt-2">
                <div className="col-lg-3">
                    <ul className="list-group text-center">
                        <li className="list-group-item color">Dashboards</li>
                        <li className="list-group-item"> 
                        <Link to="/dashboard" className="link"> Portfolio Dashboards</Link>
                        </li>
                        <li className="list-group-item"> Study Dashboards</li>
                        <li className="list-group-item"> Functional Dashboards</li>
                        <li className="list-group-item"> Milestone Dashboards</li>
                        <li className="list-group-item">  Reports</li>

                    </ul>
                </div>
                <div  ref={ref} className="col-lg-8">

                </div>
                <div className="col-lg-1"></div>

            </div>
            </>
            
    );
}

export default Dashboard;