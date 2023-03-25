import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../src/context/AuthContext';
import '../src/styles/Login.css';

function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      history.push('/dashboard');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  if (isLoggedIn) {
    history.push('/dashboard');
  }

  return (
    <div className="login">
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className="login_logo">
          <h2 className='login_logoTitle'>eShop</h2>
        </div>
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input type="text" value={email} onChange={handleEmailChange} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} />
          <button type="submit" className="login_signInButton">Sign In</button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default Login;