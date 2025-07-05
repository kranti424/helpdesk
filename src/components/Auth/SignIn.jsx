import React, { useState } from 'react';
import './Auth.css';
import { authenticateUser } from './dummyData';

const SignIn = ({ onSignUpClick, onForgotPasswordClick, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
      
      const result = authenticateUser(formData.username, formData.password);
      
      if (result.success) {
        console.log('Login successful:', result.user);
        onLoginSuccess(result.user);
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

  const handleSignUp = () => {
    console.log('Sign up clicked');
    if (onSignUpClick) {
      onSignUpClick();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1 className="auth-title">Helpdesk System</h1>
        
        {/* Demo credentials info */}
        <div className="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Username: demo, Password: demo123</p>
          <h5>to login as admin or operator or technician refer to data from auth folder</h5>
        </div>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className="auth-input"
            required
            disabled={isLoading}
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="auth-input"
            required
            disabled={isLoading}
          />
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="auth-button primary"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
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
            className="sign-up-link"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;