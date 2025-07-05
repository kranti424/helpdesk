import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import DashboardCombined from '../Dashboards/DashboardCombined';

const AuthContainer = () => {
  const [currentView, setCurrentView] = useState('signin'); // 'signin', 'signup', 'forgot-password', 'dashboard'
  const [currentUser, setCurrentUser] = useState(null);

  const showSignIn = () => setCurrentView('signin');
  const showSignUp = () => setCurrentView('signup');
  const showForgotPassword = () => setCurrentView('forgot-password');
  const showDashboard = (user) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('signin');
  };

  return (
    <div>
      {currentView === 'signin' && (
        <SignIn 
          onSignUpClick={showSignUp}
          onForgotPasswordClick={showForgotPassword}
          onLoginSuccess={showDashboard}
        />
      )}
      {currentView === 'signup' && (
        <SignUp 
          onSignInClick={showSignIn}
          onForgotPasswordClick={showForgotPassword}
          onRegisterSuccess={showDashboard}
        />
      )}
      {currentView === 'forgot-password' && (
        <ForgotPassword 
          onSignInClick={showSignIn}
        />
      )}
      {currentView === 'dashboard' && (
        <DashboardCombined 
          user={currentUser}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

export default AuthContainer;