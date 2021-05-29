import React from 'react';

const EmployeeInfo = () => (
    <div className="employee-info">
        <div className="employee-info__header-div">
            <h1>Employee information</h1>
        </div>
        <div>
            <span className="employee-info__header">Employee ID:</span> <span className="employee-info__data">P00001</span>
            <br></br>
            <span className="employee-info__header">Name:</span> <span className="employee-info__data">Karolina Franczuk</span>
            <br></br>
            <span className="employee-info__header">Position:</span> <span className="employee-info__data">Developer</span>
            <br></br>
            <span className="employee-info__header">Grade:</span> <span className="employee-info__data">B</span>
            <br></br>
            <br></br>
            <span className="employee-info__header">Business Unit:</span> <span className="employee-info__data">App Two</span>
            <br></br>
            <span className="employee-info__header">Team:</span> <span className="employee-info__data">BPM</span>
            <br></br>
            <span className="employee-info__header">Manager:</span> <span className="employee-info__data">Monika Franczuk</span>
            <br></br>
            <br></br>
            <span className="employee-info__header">Week:</span> <span className="employee-info__data">MAY 22 2021</span>
            <br></br>
            <span className="employee-info__header">Expected hours:</span> <span className="employee-info__data">40.0</span>
            <br></br>
            <div></div>
        </div>
    </div>
)

export default EmployeeInfo;

