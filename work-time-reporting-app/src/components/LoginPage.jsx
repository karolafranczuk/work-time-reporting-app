import React, {useState} from 'react';

const LoginPage = (props) => {
    const {onLoginAttempt} = props;

    const [credentials, setCredentials] = useState({email: "",        password: ""});

    const handleSubmit = (e) => {
        onLoginAttempt(credentials);
        setCredentials({"email": "", "password": ""});
    }


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
                    <label  className="loginpage__login-form__container__label__form" htmlFor="username_form" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">e-mail</label>
                    <input 
                        className="loginpage__login-form__container__input__form" 
                        type="text" 
                        placeholder="enter email here..." 
                        name="username_email" 
                        required
                        value={credentials.email}
                        onChange={(e) => setCredentials({...credentials, email: e.target.value})}>
                    </input>
                </div>
                
                <div
                className="loginpage__login-form__container">
                    <label className= "loginpage__login-form__container__label__form" htmlFor="psw">password</label>
                    <input 
                        className="loginpage__login-form__container__input__form" 
                        type="password" 
                        placeholder="enter password here..." 
                        name="psw" 
                        required
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}>
                    </input>
                </div>

                <div className="loginpage__login-form__container">
                    <button 
                        className="loginpage__login-form__container__submit-button" type="submit"
                        onClick={handleSubmit}>
                        Submit
                    </button>
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