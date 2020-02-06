import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <div className='header'>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
            <Link to='/'>Home</Link>
            <Link to='/changeName'>Change Username</Link>
        </div>
    )
}