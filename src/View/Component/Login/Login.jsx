import axios from 'axios';
import React, { useRef, useState } from 'react'

const Login = (props) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/v1/login', {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then((response) => {
            const token = response.data.data;
            console.log(token);
            localStorage.setItem('token', token);
            props.onLogin(token);
        })
            .catch((error) => console.log(error))
    };
    return (
        <div>
            <h2 className='text-center'>Login Form</h2>
            <div className='flex justify-center'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex justify-center my-3'>
                            <input type="email" ref={emailRef} placeholder="Email" className='border px-5 py-2' />
                        </div>
                        <div className='flex justify-center my-3'>
                            <input type="password" ref={passwordRef} placeholder="Password" className='border px-5 py-2' />
                        </div>
                        <div className='flex justify-center my-3'>
                            <button type="submit" className='border px-5 py-2'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
