import React from 'react';
import './Register.css';

function Register(props) {
    return (
        <div className="register-container">
            <form>
                <div className="input-wrapper">
                    <div className="input-container">
                        <label htmlFor="user">Username</label>
                        <input id="user" type='text' placeholder="Enter Username"/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input id="email" type='email' placeholder="Enter Email"/> 
                    </div>  
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input id="password" type='password' placeholder="Enter Password"/> 
                    </div>
                    <div className="input-container">
                        <label htmlFor="comfirm-password">Confirm Password</label>
                        <input id="comfirm-password" type='password' placeholder="Enter Password again"/> 
                    </div>
                
                    <button type="submit">Register</button> 
                    <div className="input-container">
                        <p>Already Signed Up?</p><a href="#">Login</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;