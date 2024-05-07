import React, { useState } from 'react';
import '../components/authorization.css'
import { type } from '@testing-library/user-event/dist/type';


const LoginForm = ({ showPassword, handleShowPassword }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (password.length < 6) {
            setError('Password must be of 6 characters.');
            return;
        }

        setError('Congrats! Login in');
        
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label htmlFor='name'>Username </label>
            <div className="input-container">
                <input id='name' type='text' placeholder='Your Name' />
                <span className="input-icon fas fa-envelope"></span>
            </div>
            <label htmlFor='pass'>Password</label>
            <div className="input-container">
                <input
                    id='pass'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-icon fas fa-lock"></span>
            </div>
            {error && <h6 className="error-message" style={{color:'red'}}>{error}</h6>}
            <div className='show-pass-div'>
                <input
                    id='show-pass'
                    type='checkbox'
                    onChange={handleShowPassword}
                />
                <label htmlFor='show-pass'>Show password</label>
            </div>
            <button type="submit">Log in</button>
        </form>
    );
};

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError('Password must be of 6 characters.');
            return;
        }

        // Perform signup logic or other actions
        setError('');
        // Additional logic for handling the signup process or other actions
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor='name'>Username </label>
            <input
                id='name'
                type='text'
                placeholder='Your Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='pass'>Password</label>
            <input
                id='pass'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <h6 className="error-message" style={{color:'red'}}>{error}</h6>}
            <button type="submit">Sign up</button>
        </form>
    );
};

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="auth-form">
            {isLogin ? (
                <LoginForm showPassword={showPassword} handleShowPassword={handleShowPassword} />
            ) : (
                <SignUpForm />
            )}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
            </button>
        </div>
    );
};

export default AuthForm;
