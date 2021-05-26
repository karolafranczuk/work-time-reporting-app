import React from 'react';

const SelectedWeekTable = () => (
    <div className="week-table__table">
            <table className="week-table__table">
                <thead>
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
                </thead>
                <tbody>
                <tr>
                    <td><button>Select project</button></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                </tr>
                <tr>
                    <td>Name/Description</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                <tr>
                    <td>Comment</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                </tbody>
            </table>
            <button>Add project</button>
    </div>
)

export default SelectedWeekTable;