import React from 'react';
import { User, Settings, Bell, LogOut, Search, Upload, Star } from 'lucide-react';

// Header Component
export const Header = ({ onProfileClick, onLogout, user }) => (
  <div className="bg-teal-500 p-4 flex justify-between items-center shadow-md">
    <h1 className="text-white text-2xl font-bold italic">Helpdesk</h1>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
        <div className="w-6 h-4 bg-gray-300 rounded-sm"></div>
      </div>
      <Bell className="text-white w-6 h-6 cursor-pointer hover:text-gray-200" />
      <button onClick={onProfileClick} className="flex items-center space-x-2 hover:text-gray-200">
        <User className="text-white w-6 h-6" />
      </button>
      <LogOut 
        className="text-white w-6 h-6 cursor-pointer hover:text-gray-200" 
        onClick={onLogout}
      />
    </div>
  </div>
);

// Footer Component
export const Footer = () => (
  <div className="bg-teal-500 p-4 text-center shadow-md">
    <span className="text-white text-sm">© 2025 Helpdesk System - All Rights Reserved</span>
  </div>
);

// Form Input Component
export const FormInput = ({ label, type = 'text', value, onChange, className = '', placeholder = '' }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input 
      type={type}
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Form Textarea Component
export const FormTextarea = ({ label, value, onChange, className = '', rows = 3 }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <textarea 
      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      value={value}
      onChange={onChange}
      rows={rows}
    />
  </div>
);

// Star Rating Component
export const StarRating = ({ rating, interactive = false, onRatingChange }) => (
  <div className="flex space-x-1">
    {Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 cursor-pointer ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        onClick={() => interactive && onRatingChange && onRatingChange(i + 1)}
      />
    ))}
  </div>
);

// Status Badge Component
export const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-500';
      case 'On hold': return 'bg-orange-500';
      case 'Closed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

// Search Bar Component
export const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search..." }) => (
  <div className="relative">
    <input 
      type="text" 
      placeholder={placeholder}
      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
  </div>
);

// Entries Selector Component
export const EntriesSelector = ({ entriesPerPage, onEntriesChange }) => (
  <div className="flex items-center space-x-2">
    <span className="text-sm text-gray-600">Show:</span>
    <select 
      className="border border-gray-300 px-3 py-1 rounded-md focus:ring-2 focus:ring-teal-500"
      value={entriesPerPage}
      onChange={(e) => onEntriesChange(parseInt(e.target.value))}
    >
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
    </select>
    <span className="text-sm text-gray-600">entries</span>
  </div>
);

// Pagination Component
export const Pagination = ({ currentPage, totalPages, totalEntries, onPageChange }) => (
  <div className="flex justify-between items-center mt-6">
    <span className="text-sm text-gray-600">
      Showing 1 to {totalEntries} of {totalEntries} entries
    </span>
    <div className="flex items-center space-x-2">
      <button 
        className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button className="px-3 py-1 text-sm bg-teal-500 text-white rounded">{currentPage}</button>
      <button 
        className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
);

// Stats Card Component
export const StatsCard = ({ title, value, bgColor, textColor = 'text-white', icon }) => (
  <div className={`${bgColor} ${textColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium mb-2 opacity-90">{title}</h3>
        <div className="text-4xl font-bold">{value}</div>
      </div>
      {icon && <div className="text-3xl opacity-80">{icon}</div>}
    </div>
  </div>
);

// Profile View Component
export const ProfileView = ({ user, onEditClick, feedback, onFeedbackChange, onFeedbackSubmit }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute top-4 right-4">
        <button onClick={onEditClick} className="text-gray-400 hover:text-gray-600">
          <Settings className="w-5 h-5" />
        </button>
      </div>
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
          <User className="w-12 h-12 text-gray-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{user?.name || 'John Doe'}</h3>
      </div>
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Username:</span>
          <span className="text-gray-800">{user?.username || 'johndoe'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Contact:</span>
          <span className="text-gray-800">{user?.contact || '+1 234 567 8900'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Email:</span>
          <span className="text-gray-800">{user?.email || 'john.doe@company.com'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Department:</span>
          <span className="text-gray-800">{user?.department || 'IT Support'}</span>
        </div>
      </div>
    </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Give Your Feedback</h3>
      <textarea 
        className="w-full p-3 border border-gray-300 rounded-md mb-4 h-32 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        placeholder="Share your experience with our support team..."
        value={feedback}
        onChange={(e) => onFeedbackChange(e.target.value)}
      />
      <div className="flex justify-center mb-4">
        <StarRating rating={0} />
      </div>
      <button 
        onClick={onFeedbackSubmit}
        className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-colors font-medium"
      >
        Submit Feedback
      </button>
    </div>
  </div>
);

// Profile Edit Component
export const ProfileEdit = ({ userProfile, onInputChange, onUpdate, onCancel }) => (
  <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
    <div className="mb-6">
      <button 
        onClick={onCancel}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
      >
        ← Back to Profile
      </button>
    </div>
    
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h3>
    
    <div className="space-y-4">
      <FormInput 
        label="Username"
        value={userProfile.username}
        onChange={(e) => onInputChange('username', e.target.value)}
      />
      <FormInput 
        label="Current Password"
        type="password"
        value={userProfile.currentPassword}
        onChange={(e) => onInputChange('currentPassword', e.target.value)}
      />
      <FormInput 
        label="New Password"
        type="password"
        value={userProfile.newPassword}
        onChange={(e) => onInputChange('newPassword', e.target.value)}
      />
      <FormInput 
        label="Confirm Password"
        type="password"
        value={userProfile.confirmPassword}
        onChange={(e) => onInputChange('confirmPassword', e.target.value)}
      />
      <FormInput 
        label="Email"
        type="email"
        value={userProfile.email}
        onChange={(e) => onInputChange('email', e.target.value)}
      />
      <FormInput 
        label="Real Name"
        value={userProfile.realName}
        onChange={(e) => onInputChange('realName', e.target.value)}
      />
      <FormInput 
        label="Access Level"
        value={userProfile.accessLevel}
        onChange={(e) => onInputChange('accessLevel', e.target.value)}
      />
      <FormInput 
        label="Project Access Level"
        value={userProfile.projectAccessLevel}
        onChange={(e) => onInputChange('projectAccessLevel', e.target.value)}
      />
      
      <div className="pt-4">
        <button 
          onClick={onUpdate}
          className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-medium"
        >
          Update Profile
        </button>
      </div>
    </div>
  </div>
);