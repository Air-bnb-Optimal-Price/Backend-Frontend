import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import Axios from 'axios';
import { useState, useEffect } from 'react';

function Login(props) {
    
        const [login, setLogin] = useState({
            username: '',
            password: '',
        });
        const [error, setError] = useState("");
        const [passwordError, setPasswordError] = useState("")
        const history = useHistory()
    
       
       const handleSubmit = event => {
            event.preventDefault();
    
                    Axios.post("/user/login", { username: login.username, password: login.password })
                .then((res) => {
                    console.log(res.data)
                    history.push('/rentalevaluation') // if and only if no error, we redirect to login
                })
                .catch(e => {
                    console.log(JSON.stringify(e.response, 0, 2))
                    setError(e.response.data.msg)
                    // if error, we show error message for 3 seconds
                    setTimeout(() => {
                        setError("");
                    }, 3000)
                })
        
        // setRegister({
        //     username: '',
        //     password: '',
        //     password2: ''
        // })
    
    }
    
        const handleInput = e => {
            setLogin({
                ...login,
                [e.target.name]: e.target.value
            });
        }
    

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="form2">
                <div className="input-wrap2">
                    <h2 className="login">Sign In</h2>
                    <div className="input-container2">
                        <label htmlFor="user" className="label2">Username</label>
                        <input
                            className="input2"
                            id="user"
                            type='text'
                            onChange={handleInput}
                            name="username"
                            value={login.username}
                            placeholder="Enter Username"
                            autoComplete="off"
                        />
                        
                    </div>

                    <div className="input-container">
                        <label htmlFor="password" className="label2">Password</label>
                        <input
                            className="input2"
                            id="password"
                            type='password'
                            onChange={handleInput}
                            name="password"
                            value={login.password}
                            placeholder="Enter Password"
                            autoComplete="off"
                        />
                        <span className="error-text2">{error}</span>
                    </div>
                    
                    <button type="submit" className="button2">Login</button> 
                    <div className="link-cont2">
                        <p className="para2">Not signed up?</p><Link to="/register" className="link2">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;