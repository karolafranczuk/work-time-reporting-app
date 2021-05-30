import React, { useState } from 'react';

import EmployeeInfo from './EmployeeInfo';
import SelectedWeekTable from './SelectedWeekTable';
import SummaryWeekTable from './SummaryWeekTable';



const WeekTable = () => {


    return (
        <div className="week-table">
            <EmployeeInfo />
            <div className="content">
                <SelectedWeekTable/> 
                <SummaryWeekTable/>       
            </div>
        </div>
    )
}

export default WeekTable;