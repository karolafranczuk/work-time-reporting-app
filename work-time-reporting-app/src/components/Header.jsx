import React from 'react';
import calendar from '../images/Calendar.png'

const Header = () => (
    <div className="header">
        <div className="header__child1">
            <img src={calendar} width="45px" alt="calendar"/>
        </div>
        <div className="header__child2">
            <h1 className="header__title">Work Time Reporting Application | Company XYZ</h1>
        </div>
    </div>
)

export default Header;