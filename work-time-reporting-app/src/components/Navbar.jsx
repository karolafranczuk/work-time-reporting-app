import React, { Component } from 'react';
import MenuItems from "../data/menuitems.json";
import { v4 as uuidv4 } from 'uuid';
import '../styles/modules/_navbar.scss';

class Navbar extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Work Time Reporting Application <i className="fas fa-calendar-week"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>

                </div>
                <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={uuidv4()}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li> 
                        )
                    } )}
                </ul>
            </nav>
        )
    }
}

export default Navbar;