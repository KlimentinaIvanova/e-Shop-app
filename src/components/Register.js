import './css/Register.css'
const Register=()=>{
    return(

            <form id='register'>
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
            <input type='password' name='confirm password' id='confirm-password'/>
            <div className='register_button'>
            
            <input className="btn submit" type='submit' defaultValue='Register'/>
            </div>
</form>

    )
}
export default Register