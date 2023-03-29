import { AuthContext } from '../Services/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
//import { useForm } from './hooks/useForm';
import "./css/Login.css"
const Login=()=>{

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
  
    const onLoginSubmit = (e) => {
      e.preventDefault();
    
      const email = e.target.email.value;
      const password = e.target.password.value;
    
      auth.signInWithEmailAndPassword(email, password)
      
        .then((userCredential) => {
          const  {user} = userCredential;
          login(user);
          console.log(user)
          navigate('/catalog');
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    };
    return(
        <section id='login-page' className="auth">
<form id='login' onSubmit={onLoginSubmit}>

        <div className="login-email">
            <h1>Login</h1>
            <label htmlFor='email'>Email:</label>
            <input
            type='email'
            id='email'
            name='email'
            placeholder="test@gmail.com"/>
            </div>
            <div className='login-password'>
            <label htmlFor="login-pass">Password:</label>
            <input type='password' id='login-password' name='password'/>
            </div>
            <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
            <input type='submit' id='btn submit' name='Login'/>
</form>
</section>
    )
}
export default Login