import logo from './logo.svg';
import './App.css';
import React from './components/Navbar/Navbar.js'
import Navbar from './components/Navbar/Navbar.js';
import Cards from './components/Cards/Cards.js';
import Data from './Data.js';
import {filterData } from './Data';

function App() {


  
  return (
    <>
        <div className="navbar">
            <h3>Top Courses</h3>
        </div>


        {/* <div className="filter">
            <Navbar
              filterData = {filterData}
            />
        </div> */}


        {/* <div className="Cards">
           <Cards></Cards>
        </div> */}
    </>

      

      
  );
}

export default App;
