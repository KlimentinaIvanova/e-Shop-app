import { AuthContext } from '../Services/AuthContext'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import "./css/Login.css"
import { Link } from 'react-router-dom'

const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const onLoginSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            setErrorMessage("The password should be at least 6 characters long.");
            return;
        }

        auth.signInWithEmailAndPassword(email, password)

            .then((userCredential) => {
                const { user } = userCredential;
                login(user);
                console.log(user)
                navigate('/catalog');
            })
            .catch((error) => {
                setErrorMessage("The email or password is not valid. Please try again");
            });
    };

    return (
      <div className='nav_login'><Link className="nav-link" to="/">
      Home
    </Link>
    <Link className="nav-link" to="/register">
                  Register
                </Link>
        <section id='login-page' className="auth">
            <form id='login' onSubmit={onLoginSubmit}>

                <div className="login-email">
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder="test@gmail.com" />
                </div>
                <div className='login-password'>
                    <label htmlFor="login-pass">Password:</label>
                    <input type='password' id='login-password' name='password' />
                </div>
                {errorMessage && (
                    <div className='dropdown'>
                        <div className='dropdown-content bigger'>{errorMessage}</div>
                    </div>
                )}
                <h3>By signing-in you agree to the eShop Website Conditions of Use & Sale.</h3> 
                <h4>Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</h4>
                
                <input type='submit' id='btn submit' name='Login' />
            </form>
        </section>
        </div>
    )
}

export default Login

