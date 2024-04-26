import React from 'react';
import { filterData } from '../../Data';
import './Navbar.css'
function Navbar(filterData){
    return(
        <>
            {filterData.map((data) =>
            <button> {data.tittle }</button>
            ) }
        </>
    )
}

export default Navbar