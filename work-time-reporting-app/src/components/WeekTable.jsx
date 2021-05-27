import React, { useState } from 'react';

import useProjectsData from '../hooks/useProjectsData';

import ProjectsList from './ProjectsList';
import EmployeeInfo from './EmployeeInfo';
import SelectedWeekTable from './SelectedWeekTable';
import SummaryWeekTable from './SummaryWeekTable';

const WeekTable = () => {
    const {projects, fetchProjectsList} = useProjectsData();
    return (
        <div className="week-table">
            <EmployeeInfo />
            <div className="content">
                <SelectedWeekTable />  
                <SummaryWeekTable />       
                <ProjectsList />
            </div>
        </div>
    )
}

export default WeekTable;