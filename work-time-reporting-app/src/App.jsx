import React from 'react';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component {

    getUserEmail() {
        return "karo.franczuk@gmail.com"
    }

    handleLogout() {
        console.log("handle logout")
    }

    render() {
        return (
        <>
        <Navbar />
        <Content />
        <Footer />
    </>  
         )
    }
}


export default App;