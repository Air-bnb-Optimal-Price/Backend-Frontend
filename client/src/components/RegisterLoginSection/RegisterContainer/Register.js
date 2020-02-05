import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { withFormik, Form, Field } from 'formik';

function Register() {
const [register, setRegister] = useState({
        username: '',
        password: '',
        password2: ''
});

const handleSubmit = async e => {
        e.preventDefault();
        if(register.password !== register.password2) {
            console.log("Passwords do not match!");
        } else {
            const newUser = {
                username: e.target.value,
                password: e.target.value,
                password2: e.target.value
            }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            const body = JSON.stringify(newUser);
            const res = await Axios.post('/user/register', body, config)
                await res.then(res => {
                    console.log(res);
                })
                console.log(res);
            } catch(err) {
                console.log("Error:", err);
            }
        } 
    }  
    
const handleInput = e => {
    setRegister({
        ...register,
        [e.target.name]: e.target.value
    });
}

    return (
        <div onSubmit={handleSubmit} className="register-container">
            <form className="form">
                <div className="input-wrapper">
                    <h2>Register</h2>
                    <div className="input-container">
                        <label htmlFor="user">Username</label>
                        <input 
                            id="user" 
                            type='text' 
                            onChange={handleInput}
                            name="username" 
                            value={register.username} 
                            placeholder="Enter Username" 
                            autoComplete="off"
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type='password' 
                            onChange={handleInput}
                            name="password" 
                            value={register.password} 
                            placeholder="Enter Password"
                            autoComplete="off"
                        /> 
                    </div>
                    <div className="input-container">
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input 
                            id="passwordComfirm" 
                            type='password' 
                            onChange={handleInput}
                            name="password2" 
                            value={register.password2}
                            placeholder="Enter Password again"
                            autoComplete="off"
                        /> 
                    </div>
                    
                
                    <button type="submit">Register</button> 
                    <div className="input-container link">
                        <p>Already Signed Up?</p><Link to="/login">Login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

// const FormikRegister = withFormik({
//     mapPropsToValues(props){
//         return {
//             username: props.user
//         }
//     }




// })(Register);

export default Register;


//  useEffect(() => {
//         Axios.post("/user/register", {


//         })
//         .then(res => {
//             console.log(res);    
//         }).catch(error => {
//             console.log(error)
//         })
//     }, []);
