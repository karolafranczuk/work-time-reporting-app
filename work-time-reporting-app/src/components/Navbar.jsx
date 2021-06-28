import React, { Component } from 'react';
import MenuItems from "../data/menuitems.json";
import { Button } from './Button';
import '../styles/modules/_navbar.scss';

class Navbar extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}/>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            //zmień ten klucz na uuid
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li> 
                        )
                    } )}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
}

export default Navbar;