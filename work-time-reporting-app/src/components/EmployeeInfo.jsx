import React from 'react';

const EmployeeInfo = () => (
    <div className="employee-info">
        <div className="employee-info__header-div">
            <h3>Employee information</h3>
        </div>
        <div className="employee-info__info">
            <span className="employee-info__header">Employee ID:</span> <span className="employee-info__data">P00001</span>
            <br></br>
            <span className="employee-info__header">Name:</span> <span className="employee-info__data">Karolina Franczuk</span>
            <br></br>
            <span className="employee-info__header">Position:</span> <span className="employee-info__data">Developer</span>
            <br></br>
            <span className="employee-info__header">Grade:</span> <span className="employee-info__data">B</span>
            <br></br>
            <span className="employee-info__header">Team:</span> <span className="employee-info__data">BPM</span>
            <br></br>
            <span className="employee-info__header">Manager:</span> <span className="employee-info__data">Monika Franczuk</span>
            <br></br>
            <div></div>
        </div>
        <div className="employee-info__your_raports">
            <h3>Your raports</h3>
            <ul>
                <li>sent</li>
                <li>saved</li>
            </ul>
        </div>
        <div className="employee-info__selected_week">
            <h3>Reports to fill</h3>
            select week
        </div>
    </div>
)

export default EmployeeInfo;

