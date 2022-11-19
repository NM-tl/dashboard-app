import React from 'react'
import { signInWithGoogle } from '../../../../firebase-config';

export default function SignInWithGoogleBtn() {
  return (
    <>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with google</button>
    </>
  )
}
