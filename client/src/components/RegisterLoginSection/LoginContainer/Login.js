import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login(props) {
    return (
        <div className="login-container">
            <form>
                <div className="input-wrapper">
                    <h2>Login</h2>
                    <div className="input-container">
                        <label htmlFor="user">Username</label>
                        <input id="user" type='text' placeholder="Enter Username"/>
                    </div> 
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input id="password" type='password' placeholder="Enter Password"/> 
                    </div>
                    
                    <button type="submit">Login</button> 
                    <div className="input-container link">
                        <p>Not Signed Up?</p><Link to="/register">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;