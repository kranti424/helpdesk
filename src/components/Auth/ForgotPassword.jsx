import React, { useState } from 'react';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot password email:', email);
    // Handle forgot password logic here
  };

  const handleSignIn = () => {
    console.log('Sign in clicked');
    // Handle navigation to sign in
  };

  return (
    <div className="auth-container">
      <div className="auth-form forgot-password-form">
        <p className="forgot-password-text">
          Don't worry, Enter your email below and we will send you a link to change password.
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            className="auth-input"
            required
          />
          
          <button type="submit" className="auth-button submit">
            Submit
          </button>
          
          <button 
            type="button" 
            className="auth-button sign-in"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;