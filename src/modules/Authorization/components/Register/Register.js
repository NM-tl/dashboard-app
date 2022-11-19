import React, { useState } from 'react';
import { auth } from '../../../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../../../../common/css/FormInputs/FormInputs.css';

export default function Register() {

  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      alert('Thank you for registration😉');
      e.preventDefault();
      alert('Welcome back!👋');
      navigate('/dashboard')
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='enter-form'>
    <input 
      placeholder="Email..." 
      onChange={(e) => {
        setRegisterEmail(e.target.value)}}
      className='enter-form__input'
    />
    <input
      placeholder="Password..."
      onChange={(e) => {
        setRegisterPassword(e.target.value)}}
      className='enter-form__input'
    />
    <button 
      onClick={register}
      className='btn enter-form__btn'
      >Submit</button>
  </div>
  )
}
