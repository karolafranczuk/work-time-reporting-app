import React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import LoginPage from './components/LoginPage';

class App extends React.Component {
    state = {
       isUserLoggedIn: false 
    }

    getUserEmail() {
        return "karo.franczuk@gmail.com"
    }

    handleLogout() {
        console.log("handle logout")
    }

    render() {
        return (
    <>
        {this.state.isUserLoggedIn ? 
        <>
            <Navbar />
            <Content />
            <Footer />
        </> : 
        <LoginPage />
    }
         
    </> 
         )
    }
}


export default App;