import React, { useState } from 'react';
import {login} from "./Auth";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const loginSubmit = async e => {
        e.preventDefault();
        setError('');

        const success = await login(email, password);

        if(success){
            navigate('/dashboard');
        }else{
            setError('Invalid email or password');
        }
    }

  return (
    <div className='main'>
        <div className='top'>
        <h1>Login</h1>
        </div>
        <form onSubmit={loginSubmit} className='mid'>
            <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required/>
            <button type='submit'>Login</button>
        </form>
        
        <div className='error'>
            {error && <p>{error}</p>}
            </div>
    </div>
  )
}

export default Login;