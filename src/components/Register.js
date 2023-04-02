import './css/Register.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Services/AuthContext';
import { auth } from '../firebase';

const Register = () => {

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const { register } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }

    if (password !== repass) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        register(user);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <form id='register' onSubmit={onSubmit}>
      <div className="register" />
      <h1>Register</h1>
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        placeholder="test@gmail.com" />
      <label htmlFor="pass">Password:</label>
      <input type='password' id='register-password' name='password' />
      <label htmlFor='con-pass'>Confirm Password</label>
      <input type='password' name='repass' id='confirm-password' />
      {errorMessage && (
        <div className='dropdown'>
          <div className='dropdown-content'>{errorMessage}</div>
        </div>
      )}
      <div className='register_button'>

        <input className="btn submit" type='submit' defaultValue='Register' />
      </div>
    </form>
  )
}

export default Register

