import React, {useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

export const Header = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        Axios.get("/title")
        .then(res => {
            console.log(res)
            setTitle(res);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='header'>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
            <Link to='/'>Home</Link>
            <Link to='/changeName'>Change Username</Link>
        </div>
    )
}