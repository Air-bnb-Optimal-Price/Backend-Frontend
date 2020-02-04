import React from 'react';
import './RegisterLogin.css';
import Register from '../RegisterContainer/Register';
import Login from '../LoginContainer/Login';
import { Route } from 'react-router-dom';

function RegisterLogin(props) {
    return (
        <div className="register-login-container">
            <nav> 
                <h1><i className="fab fa-airbnb"></i></h1>
            </nav>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </div>
    );
}

export default RegisterLogin;