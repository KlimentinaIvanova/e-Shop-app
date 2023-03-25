import React,{useState} from 'react'
import '../src/styles/Register.css'
import {Link, useHistory} from 'react-router-dom'
import StorefrontTwoTone from '@material-ui/icons/StorefrontTwoTone'
import { auth } from "./firebase";

function Register(){

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password )
            .then((auth) => {
                if (auth) {
                    history.push('/catalog');
                }
            })
            .catch(error => alert(error.message))

    }
    return(
        <div className='register'> 
        <Link to='/' style={{ textDecoration: "none" }}>
            <div className="register_logo">
            <StorefrontTwoTone className="register_logoImage" fontSize="large" />
                <h2 className="register_logoTitle">eSHOP</h2>
            </div>
        </Link>

        <div className='register__container'>
            <h1>Register</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button className='register__registerButton' onClick={register}>Create your eShop Account</button>

            </form>

            

        </div>
    </div>
    )
}
export default Register