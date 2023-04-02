import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Services/AuthContext';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import './css/Logout.css'

export const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const [loggedOut, setLoggedOut] = useState(false);
    const [error, setError] = useState(null);
  
    const handleLogout = async () => {
      try {
        await auth.signOut();

        logout();
        localStorage.clear();
        setLoggedOut(true);
  
      } catch (error) {
        console.log(error);
        setError('An error occurred while logging out.');
      }
    };
  
    useEffect(() => {
      handleLogout();
    }, []);
  
    return (
      <>
      <div><Link className="nav-link" to="/">
              Home
            </Link></div>
      <div className='logout-container'>
      
        {error && <p className="error-message">{error}</p>}
        {loggedOut && <p className='success-message'>You have successfully logged out.</p>}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uGuVhPYdwKgO9CKjBtDeLWnPK3ccednNBQ&usqp=CAU" alt='logout'/>
        </div>
      </>
    );
};
  
export default Logout;









