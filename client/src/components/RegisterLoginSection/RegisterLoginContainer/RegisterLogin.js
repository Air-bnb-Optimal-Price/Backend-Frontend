import React from 'react';
import './RegisterLogin.css';
import Register from '../RegisterContainer/Register';
import Login from '../LoginContainer/Login';

function RegisterLogin(props) {
    return (
        <div className="register-login-container">
            <nav> 
                <h1><i className="fab fa-airbnb"></i></h1>
            </nav>
            
            <Register />
            <Login />
        </div>
    );
}

export default RegisterLogin;