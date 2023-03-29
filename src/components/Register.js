import './css/Register.css'
import { useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { AuthContext } from '../Services/AuthContext';
import { auth } from '../firebase';

const Register=()=>{

    
    const navigate=useNavigate()
    const [errorMessage, setErrorMessage] = useState(null);
    const {register}=useContext(AuthContext)
    const {login}=useContext(AuthContext)

const onSubmit=(e)=>{
    e.preventDefault()

    const formData=new FormData(e.target)

    const user=formData.get('user')
    const email=formData.get('email')
    const password=formData.get('password')
    const repass=formData.get('repass')

    if(password !==repass){
        return
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then(useCreditential=>{
        const {user}=useCreditential
        register(user)
        navigate('/')
    })
    .catch((error)=>{
        setErrorMessage(error.message)
    })
}

    return(

            <form id='register'onSubmit={onSubmit}>
        <div className="register"/>
            <h1>Register</h1>
            <label htmlFor='email'>Email:</label>
            <input
            type='email'
            id='email'
            name='email'
            placeholder="test@gmail.com"/>
            <label htmlFor="pass">Password:</label>
            <input type='password' id='register-password' name='password'/>
            <label htmlFor='con-pass'>Confirm Password</label>
            <input type='password' name='repass' id='confirm-password'/>
            <div className='register_button'>
            
            <input className="btn submit" type='submit' defaultValue='Register'/>
            </div>
</form>

    )
}
export default Register