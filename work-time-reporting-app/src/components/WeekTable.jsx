import React, { useState } from 'react';

import useProjectsData from '../hooks/useProjectsData';

import ProjectsList from './ProjectsList';
import EmployeeInfo from './EmployeeInfo';
import SelectedWeekTable from './SelectedWeekTable';
import SummaryWeekTable from './SummaryWeekTable';

const WeekTable = () => {
    const {projects, fetchProjectsList} = useProjectsData();
    return (
        <>
            <EmployeeInfo />
            <SelectedWeekTable />  
            <SummaryWeekTable />       
            <ProjectsList />
        </>
    )
}

export default WeekTable;