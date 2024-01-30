import React, { useState } from 'react';
import './signUpForm.css'
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import {auth} from './firebase'
import {signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Login successfully")
            if (email !==null) {
                navigate(`/specialpage`);
              } else {
                navigate('/dashboard');
              }
            } catch (err) {
              console.log(err);
            }
    }
    return (
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">
                    Email:
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type='submit'>Login</button> <br />
                <p>Don't have an account? <Link to="/signupform">Register</Link></p>
            </form>
        </div>
    )
}

export default Login 