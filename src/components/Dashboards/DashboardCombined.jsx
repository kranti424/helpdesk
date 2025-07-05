import React from 'react';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import OpTeamDashboard from './OpTeamDashboard';
import TechTeamDashboard from './TechTeamDashboard';

const DashboardCombined = ({ user, onLogout, ...props }) => {
  // Extract user role from the user object
  const userRole = user?.role || user?.userType || user?.type;
  
  // Role-based dashboard rendering
  const renderDashboard = () => {
    switch (userRole?.toLowerCase()) {
      case 'user':
      case 'customer':
        return <UserDashboard user={user} onLogout={onLogout} {...props} />;
      
      case 'admin':
      case 'administrator':
        return <AdminDashboard user={user} onLogout={onLogout} {...props} />;
      
      case 'agent':
      case 'opteam':
      case 'operations':
        return <OpTeamDashboard user={user} onLogout={onLogout} {...props} />;
      
      case 'tech':
      case 'technical':
      case 'techteam':
      case 'developer':
        return <TechTeamDashboard user={user} onLogout={onLogout} {...props} />;
      
      default:
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Access Denied
              </h2>
              <p className="text-gray-600 mb-4">
                Invalid user role: {userRole || 'Not specified'}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Valid roles: user, admin, agent, tech
              </p>
              <button
                onClick={onLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Back to Login
              </button>
            </div>
          </div>
        );
    }
  };

  // Handle case where user object is null or undefined
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            No User Data
          </h2>
          <p className="text-gray-600 mb-4">
            User information is not available.
          </p>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {renderDashboard()}
    </div>
  );
};

export default DashboardCombined;