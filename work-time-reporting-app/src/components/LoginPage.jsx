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
                <div className="loginpage__login-form2">
                <h3 className="loginpage__login-form__header">Sign In!</h3>
                <div className="loginpage__login-form__container">
                    <label className="loginpage__login-form__container__label__form" for="username_form" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">e-mail</label>
                    <input className="loginpage__login-form__container__input__form" type="text" placeholder="enter email here..." name="username_email" required></input>
                </div>
                
                <div
                className="loginpage__login-form__container">
                    <label className= "loginpage__login-form__container__label__form" for="psw">password</label>
                    <input className="loginpage__login-form__container__input__form" type="password" placeholder="enter password here..." name="psw" required></input>
                </div>

                <div className="loginpage__login-form__container">
                    <button className="loginpage__login-form__container__submit-button" type="submit">Submit</button>
                </div>   
                <div className="loginpage__login-form__container__OR">
                <span>or</span>
                </div>
                <div className="loginpage__login-form__container">
                    <button className="loginpage__login-form__container__submit__recruiter">Log in as a Recruiter</button>
                </div>
            </div>
            </div>
        </div>
    
    )
    
}

export default LoginPage;