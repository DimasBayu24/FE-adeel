import React, { useState, useEffect } from 'react'
import { Container, Col, Row, FormLabel, Form, FormGroup, FormControl, FormText } from 'react-bootstrap';
import Axios from 'axios'

const Chat = () => {
    useEffect(() => {
        LoadUser()
    })
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const LoadUser = () => {
        Axios.get(`http://localhost:3003/users`).then(res => {
            setUser(res.data.users)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }

    return (
        <>
            <p>ini chat page</p>
            {
                isLoading === true ?
                    <p>lagi loading</p>
                    :
                    user.map((item) => (
                        <p>{item.firstName}</p>
                    ))
            }
        </>
    )
}

export default Chat