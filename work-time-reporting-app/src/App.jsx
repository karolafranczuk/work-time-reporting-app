import React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';
import LoginPage from './components/LoginPage';
import AuthenticationAPI from './api/FetchAuthenticationApi';

class App extends React.Component {
    state = {
        accessToken: null,
        previousLoginAttemptFailed: false
    }

    isUserLoggedIn() {
        return !this.state.accessToken;
    }

    getUserEmail() {
        return "karo.franczuk@gmail.com"
    }

    handleLogout() {
        console.log("handle logout")
    }

    handleLoginAttempt = (credentials) => {
        AuthenticationAPI.login(credentials)
            .then( ({accessToken}) => {
                this.setState({
                    accessToken,

                })
            })    
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
        <LoginPage
            onLoginAttempt={this.handleLoginAttempt} />
    }
         
    </> 
         )
    }
}


export default App;