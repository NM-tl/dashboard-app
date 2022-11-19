import React, { useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { auth } from '../../../../firebase-config';
import { useNavigate } from 'react-router-dom';
import '../../../../common/css/Buttoms/Buttoms.css'
import '../../../../common/css/FormInputs/FormInputs.css';
import '../../../../common/css/Buttoms/EnterButtoms/EnterButtoms.css'

export default function Login() {

  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const login = async (e) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      e.preventDefault();
      alert('Welcome to your Dashboard👋');
      navigate('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>
      <div className='enter-form'>
        <input
          placeholder="Email..."
          onChange={(e) => {
            setLoginEmail(e.target.value)}}
          className='enter-form__input'
        />
        <input
          placeholder="Password..."
          onChange={(e) => {
            setLoginPassword(e.target.value)}}
          className='enter-form__input'
        />
        <button 
          onClick={login}
          className='btn enter-form__btn'
          > Login</button>
      </div>
    </div>  
  )
}
