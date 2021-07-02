import React from 'react';

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <div className="loginpage__header">
                <h1 className="loginpage__header__logo">
                    Work Time Reporting Application
                    <i className="fas fa-calendar-week"></i>
                </h1>
            </div>
            <div className="loginpage__login-form">
                <h3 className="loginpage__login-form__header">Welcome!</h3>
                <div className="loginpage__login-form__container">
                    <label className="loginpage__login-form__container__label__email" for="username_email">e-mail</label>
                    <input className="loginpage__login-form__container__input__email" type="text" placeholder="enter email here..." name="username_email" required></input>
                </div>
                
                <div
                className="loginpage__login-form__container">
                    <label for="psw">password</label>
                    <input type="password" placeholder="enter password here" name="psw" required></input>
                </div>

                <div className="loginpage__login-form__container">
                    <button type="submit">Log In!</button>
                </div>
                <span>or</span>
                <div className="loginpage__login-form__container">
                    <button>Log in as a Recruiter</button>
                </div>
            </div>
        </div>
    )
    
}

export default LoginPage;