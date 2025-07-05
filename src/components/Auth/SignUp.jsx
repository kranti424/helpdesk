import React, { useState } from 'react';
import './Auth.css';
import { registerUser } from './dummyData';

const SignUp = ({ onSignInClick, onForgotPasswordClick, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = registerUser(formData.username, formData.password, formData.email);
      
      if (result.success) {
        console.log('Registration successful:', result.user);
        onRegisterSuccess(result.user);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    if (onForgotPasswordClick) {
      onForgotPasswordClick();
    }
  };

  const handleSignIn = () => {
    console.log('Sign in clicked');
    if (onSignInClick) {
      onSignInClick();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Helpdesk System</h1>
        <p className="auth-subtitle">Sign up here</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="auth-input"
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="auth-input"
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="auth-input"
            required
          />
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="auth-button primary"
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-links">
          <button 
            type="button" 
            className="forgot-password-link"
            onClick={handleForgotPassword}
          >
            Forgot password
          </button>
          <button 
            type="button" 
            className="sign-in-link"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;