import React, { useState } from 'react'
import { Container, Col, Row, FormLabel, Form, FormGroup, FormControl, FormText, Button } from 'react-bootstrap';
import Axios from 'axios'
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();
    const [id, setId] = useState('')
    const loginHandler = () => {

        Axios.post(`http://localhost:3003/login/${id}`).then(
            res => {
                localStorage.setItem('token', res.data.authorization)
                history.push("/chat");

            }
        ).catch(err => { console.log("yah error nih : ", err) })
        // console.log(id);
    }

    return (
        <>
            <Form>
                <FormGroup>
                    <FormLabel>ID user</FormLabel>
                    <FormControl placeholder="Enter ID user" onChange={(e) => setId(e.target.value)} />
                </FormGroup>
            </Form>
            <Button type="submit" onClick={loginHandler}>
                Submit
  </Button>
        </>
    )
}

export default Login