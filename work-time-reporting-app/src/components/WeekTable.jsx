import React from 'react';

const WeekTable = () => {
    return (
        <div className="week-table">
            <div className="week-table__employee__info">
                <span className="week-table_employee_info_header">P00001</span>, <span>Karolina Franczuk</span>
                <br></br>
                <span className="week-table_employee_info_header">Position:</span> <span>Developer</span>
                <br></br>
                <span className="week-table_employee_info_header">Week:</span> <span>MAY 22 2021</span>
                <br></br>
                <span className="week-table_employee_info_header">Expected hours:</span> <span>40.0</span>
                <br></br>
            </div>
            <table className="week-table__table">
                <tr>
                    <th>Project ID</th>
                    <th>Mon (data)</th>
                    <th>Tue (data)</th>
                    <th>Wed (data)</th>
                    <th>Thu (data)</th>
                    <th>Fri (data)</th>
                    <th>Sat (data)</th>
                    <th>Sun (data)</th>
                </tr>
                <tr>
                    <td><button>Select project</button></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><input></input></td>
                    <td><input></input></td>
                </tr>
                <tr>
                    <td>Name/Description</td>
                    <td colSpan="7"><input/></td>
                </tr>
                <tr>
                    <td>Comment</td>
                    <td colSpan="7"><input/></td>
                </tr>
            </table>
            <button>Add project</button>
        </div>
    )
}

export default WeekTable;