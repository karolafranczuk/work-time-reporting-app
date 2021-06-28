import React from 'react';

const EmployeeInfo = (props) => {
    const {week, setWeek} = props;

    return (
    <div className="employee-info">
        <div className="employee-info__header-div">
            <h3>User section</h3>
        </div>
        <div className="employee-info__section">
        <div className="employee-info__section_info">
            <h4>Info</h4>
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
        <div className="employee-info__section__your_raports">
            <h3>Your raports</h3>
            <ul>
                <li>sent</li>
                <li>saved</li>
            </ul>
        </div>
        <div className="employee-info__section__selected_week">
            <h3>Reports to fill</h3>
            <label htmlFor="week">Choose a week: </label>
            <input 
                type="week" 
                name="week" 
                id="report-week" 
                min="2021-W1" 
                max="2021-W42" 
                required={true}
                value={week}
                onChange={(e) => setWeek(e.target.value)}
                >
            </input>
            <button>Select</button>
        </div>
    </div>
    </div>
    )
}

export default EmployeeInfo;

