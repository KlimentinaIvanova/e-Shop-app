/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../Services/AuthContext';
import { auth } from '../firebase';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    let current = user;
  console.log(current)
  console.log(user)
  
  
    const handleLogout = async () => {
      try {
        await auth.signOut(current.accessToken);

        logout();
        localStorage.clear();
        current = null;
        navigate('/');
  
      } catch (error) {
        console.log(error);
        navigate('/login');
      }
    };
  
  
    useEffect(() => {
      handleLogout();
    }, [handleLogout]);
  
    return null;
  }
export default Logout;
