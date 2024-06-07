import React, { useRef, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

const Register = () => {
    const [message, setMessage] = useState('');
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:1000/v1/register', {
            name: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }).then((response) => {
            setMessage(response.data.message)
            console.log(response)
        })
            .catch((error) => console.log(error))
    };
    return (
        <div className='my-[5%]'>
            <h2 className='text-center'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center my-3'>
                    <input type="text" ref={usernameRef} placeholder="Username" className='border px-5 py-2' />
                </div>
                <div className='flex justify-center my-3'>
                    <input type="email" ref={emailRef} placeholder="Email" className='border px-5 py-2' />
                </div>
                <div className='flex justify-center my-3'>
                    <input type="password" ref={passwordRef} placeholder="Password" className='border px-5 py-2' />
                </div>
                <div className='flex justify-center my-3'>
                    <button type="submit" className='border px-5 py-2 bg-[#00AAA1] text-white rounded-lg'>Register</button>
                </div>

            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Register
