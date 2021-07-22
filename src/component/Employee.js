import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Employee = (props) => {
    return (
        <>
            <div>{props.id}</div>
            <div className='imgWrapper'><img src={props.imgSrc}/></div>
            <div>{props.name}</div>
            <div>{props.dob}</div>
            <div>{props.designation}</div>
            <FontAwesomeIcon icon={["fal", "coffee"]} />
        </>
    );
};

export {Employee};
export default Employee;
