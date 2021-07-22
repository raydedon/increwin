import React from 'react';
import './emloyees.css';
import Employee from "./Employee";
import * as employees from '../fakeData/employees';
import {Link} from "react-router-dom";

const Employees = (props) => {
    return (
        <div>
            <h1>List of employees</h1>
            <Link to="/add">Add</Link>
            <div className='container'>{employees.employees.map((employee) => <Employee {...employee}/>)}</div>
        </div>
    );
};

export {Employees};
export default Employees;
