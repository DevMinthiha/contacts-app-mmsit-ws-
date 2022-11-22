import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './services/userSlice';

const Login = () => {
  const [email, setEmail] = useState('hhz@gmail.com');
  const [password, setPassword] = useState('asdffdsa');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiLogin = async () => {
    const { data } = await axios.post(
      'http://go.contact.mmeducare.com/api/v1/login',
      { email, password }
    );
    console.log(data);
    dispatch(login(data));
    if (data?.success) {
      navigate('/dashboard');
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    apiLogin();
  };
  return (
    <form onSubmit={onSubmitHandler} className="col-6">
      <h1>Login Account</h1>
      <input
        type="emai"
        className="form-control my-5"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        className="form-control my-5"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" className="btn btn-primary">
        login
      </button>
    </form>
  );
};

export default Login;
