import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from './services/userSlice';

const Dashboard = () => {
    const user = useSelector(state => state.user.value);
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
        dispatch(logout(null))
        navigate('/login')
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{user?.auth?.name}</h3>
      <button onClick={logoutHandler} className="btn btn-outline-danger">logout</button>
    </div>
  )
}

export default Dashboard
