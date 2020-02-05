import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { withFormik, Form, Field } from 'formik';

/**
 * gideon: please read through this and notice the logic. 
 * The login component will be similar, but with slightly different logic.
 * We are only using two state fields - register, and error. 
 * We don't need second password, for now we can get rid of it.
 * 
 */
function Register() {
    const [register, setRegister] = useState({
        username: '',
        password: '',
        password2: ''
    });
    const [error, setError] = useState("");
    const history = useHistory()

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     if(register.password !== register.password2) {
    //         console.log("Passwords do not match!");
    //     } else {
            
    //         try {
    //             const config = {
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             }
    //         const res = await Axios.post('/user/register', body, config)
    //             await res.then(res => {
    //                 console.log(res);
    //             })
    //             console.log(res);
    //         } catch(err) {
    //             console.log("Error:", err);
    //         }
    //     } 
    // }  
    const handleSubmit = event => {
        event.preventDefault()

        if(register.password !== register.password2) {
                    console.log("Passwords do not match!");
                }  else {

                    Axios.post("/user/register", { username: register.username, password: register.password })
            .then((res) => {
                console.log(res.data)
                history.push('/login') // if and only if no error, we redirect to login
            })
            .catch(e => {
                console.log(JSON.stringify(e.response, 0, 2))
                setError(e.response.data.msg)
                // if error, we show error message for 3 seconds
                setTimeout(() => {
                    setError("")
                }, 3000)
            })
    }
    // setRegister({
    //     username: '',
    //     password: '',
    //     password2: ''
    // })

}

    const handleInput = e => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="form">
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
                        <span className="error-text">{error}</span>
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

