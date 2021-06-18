import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const SummaryWeekTable = (props) => {
   const {addedProjects} = props;


   const sumProjectsHoursInWeek = (addedProjects) => {
        let summary = 0;
            for (const project of addedProjects) {
                summary = summary + Number(project.summary);
            }
        return summary;     
   }

   const countDifference = () => {
       const sumHours = document.querySelector('#sumHours');
       const expectedHours = document.querySelector('#expectedHours');
       console.log(`${sumHours}, ${expectedHours}`);
       
   }

   return (
   <div className="week-table__summary">
    <table>
    <thead>
    <tr>
        <th>Project Information</th>
        <th>Comment</th>
        <th>Mon (data)</th>
        <th>Tue (data)</th>
        <th>Wed (data)</th>
        <th>Thu (data)</th>
        <th>Fri (data)</th>
        <th>Sat (data)</th>
        <th>Sun (data)</th>
        <th>Summary</th>
    </tr>
    {addedProjects.length > 0 && addedProjects.map(((addedProject, index) => <tr key={uuidv4()}>
        <td>{`${addedProject.name} (${addedProject.id})`}<br></br>
            {`${addedProject.client}`}</td>
        <td>{addedProject.comment}</td>
        <td>{addedProject.hours.mon}</td>
        <td>{addedProject.hours.tue}</td>
        <td>{addedProject.hours.wed}</td>
        <td>{addedProject.hours.thu}</td>
        <td>{addedProject.hours.fri}</td>
        <td>{addedProject.hours.sat}</td>
        <td>{addedProject.hours.sun}</td>
        <td>{addedProject.summary}</td>
    </tr>))} 
    <tr>
        <td colSpan="9">Raported Hours</td>
        <td id="sumHours">{sumProjectsHoursInWeek(addedProjects)}</td>
    </tr>
    <tr>
        <td colSpan="9">Expected Hours</td>
        <td id="expectedHours">40</td>
    </tr>
    <tr>
        <td colSpan="4">Difference</td>
        <td colSpan="5">Overtime/Missing hours</td>
        <td></td>
    </tr>
    </thead>
    </table>
</div>
)
}

export default SummaryWeekTable;