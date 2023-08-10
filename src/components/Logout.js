import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout({setIsAuthenticated}) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('isAuthenticated', false);
        setIsAuthenticated(false);
    }
    
  return (
    <div className="fixed top-0 right-0">
        <button onClick={() => logout()}>로그아웃</button>
    </div>
  )
}
