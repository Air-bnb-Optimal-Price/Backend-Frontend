import React, { useState } from 'react'
import { useAxiosWithAuth } from '../../hooks'

export const ChangeName = ({ username, id }) => {

    const axios = useAxiosWithAuth()

    const [name, setName] = useState(username)

    const handleSubmitNameChange = async event => {
        try {
            const { data } = await axios.put('/user/chaneName', name)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="change-name-container">
            <form onSubmit={handleSubmitNameCHange} className="change-name-form">
                <input value={name} onChange={handleNameChange} />
                <input type="submit" value="Submit" /></form></div>
    )
} 