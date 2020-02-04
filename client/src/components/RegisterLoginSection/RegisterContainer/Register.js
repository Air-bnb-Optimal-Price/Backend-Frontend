import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { withFormik, Form, Field } from 'formik';

function Register(props) {
const [register, setRegister] = useState();

    useEffect(() => {
        Axios.post("/user/register")
        .then(res => {
            console.log(res);    
        }).catch(error => {
            console.log(error)
        })
    }, []);

    function handleSubmit(){

    }
    return (
        <div className="register-container">
            <Form className="form">
                <div className="input-wrapper">
                    <h2>Register</h2>
                    <div className="input-container">
                        <label htmlFor="user">Username</label>
                        <Field id="user" type='text' name="username" placeholder="Enter Username"/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <Field id="email" type='email' name="email" placeholder="Enter Email"/> 
                    </div>  
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <Field id="password" type='password' name="password" placeholder="Enter Password"/> 
                    </div>
                    <div className="input-container">
                        <label htmlFor="comfirm-password">Confirm Password</label>
                        <Field id="comfirm_password" type='password' name="comfirmPassword" placeholder="Enter Password again"/> 
                    </div>
                    
                
                    <button type="submit">Register</button> 
                    <div className="input-container link">
                        <p>Already Signed Up?</p><Link to="/login">Login</Link>
                    </div>
                </div>
            </Form>
        </div>
    );
}

const FormikRegister = withFormik({
    


})(Register);

export default FormikRegister;