import React, { useState } from 'react';
import { User, Bell, LogOut, Search, Upload, Star, Grid, FileText, List, Edit } from 'lucide-react';

// Header Component
const Header = ({ onProfileClick, onLogout }) => (
  <div className="bg-teal-400 p-4 flex justify-between items-center">
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

// Sidebar Component
const Sidebar = ({ currentView, onViewChange }) => (
  <div className="w-48 bg-gray-300 min-h-screen p-4">
    <nav className="space-y-2">
      <button 
        onClick={() => onViewChange('dashboard')}
        className={`w-full text-left p-3 rounded flex items-center space-x-3 transition-colors ${
          currentView === 'dashboard' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
        }`}
      >
        <Grid className="w-5 h-5" />
        <span className="text-gray-800 font-medium">Dashboard</span>
      </button>
      
      <button 
        onClick={() => onViewChange('newTicket')}
        className={`w-full text-left p-3 rounded flex items-center space-x-3 transition-colors ${
          currentView === 'newTicket' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
        }`}
      >
        <FileText className="w-5 h-5" />
        <span className="text-gray-800 font-medium">New Ticket</span>
      </button>
      
      <button 
        onClick={() => onViewChange('myTickets')}
        className={`w-full text-left p-3 rounded flex items-center space-x-3 transition-colors ${
          currentView === 'myTickets' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
        }`}
      >
        <List className="w-5 h-5" />
        <span className="text-gray-800 font-medium">My Ticket</span>
      </button>
    </nav>
  </div>
);

// Footer Component
const Footer = () => (
  <div className="bg-teal-400 p-4 text-center">
    <span className="text-white text-sm">Footer Area</span>
  </div>
);

// Dashboard Stats Card Component
const StatsCard = ({ title, value, bgColor, textColor = 'text-white' }) => (
  <div className={`${bgColor} ${textColor} p-8 rounded-lg shadow-lg`}>
    <h3 className="text-sm font-medium mb-2">{title}</h3>
    <div className="text-6xl font-bold">{value}</div>
  </div>
);

// Dashboard Component
const Dashboard = () => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard 
        title="Total Tickets" 
        value="12" 
        bgColor="bg-blue-500" 
      />
      <StatsCard 
        title="Total Solved" 
        value="8" 
        bgColor="bg-green-500" 
      />
      <StatsCard 
        title="Total Awaiting Approval" 
        value="2" 
        bgColor="bg-red-500" 
      />
      <StatsCard 
        title="Total in Progress" 
        value="2" 
        bgColor="bg-yellow-400" 
        textColor="text-black"
      />
    </div>
  </div>
);

// Form Input Component
const FormInput = ({ label, type = 'text', value, onChange, className = '', placeholder = '' }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input 
      type={type}
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Form Textarea Component
const FormTextarea = ({ label, value, onChange, className = '', rows = 4 }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <textarea 
      className="w-full p-3 border border-gray-300 rounded-md bg-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
      value={value}
      onChange={onChange}
      rows={rows}
    />
  </div>
);

// New Ticket Component
const NewTicket = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ticketNo: '',
    name: '',
    subject: '',
    category: '',
    type: '',
    priority: '',
    date: '',
    department: '',
    description: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formData.subject && formData.description) {
      onSubmit(formData);
      setFormData({
        ticketNo: '',
        name: '',
        subject: '',
        category: '',
        type: '',
        priority: '',
        date: '',
        department: '',
        description: ''
      });
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Create New Ticket</h2>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput 
            label="Ticket No."
            value={formData.ticketNo}
            onChange={(e) => handleInputChange('ticketNo', e.target.value)}
            placeholder=""
          />
          <FormInput 
            label="Date:"
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
          />
          <FormInput 
            label="Name:"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder=""
          />
          <FormInput 
            label="Department:"
            value={formData.department}
            onChange={(e) => handleInputChange('department', e.target.value)}
            placeholder=""
          />
        </div>
        
        <FormInput 
          label="Subject:"
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          className="mb-6"
          placeholder=""
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput 
            label="Category:"
            value={formData.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            placeholder=""
          />
          <FormTextarea 
            label="Description:"
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={4}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput 
            label="Type:"
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            placeholder=""
          />
          <div className="flex justify-end items-end">
            <div className="flex items-center space-x-2 text-teal-500 bg-teal-100 px-4 py-2 rounded-md">
              <Upload className="w-5 h-5 cursor-pointer hover:text-teal-600" />
            </div>
          </div>
        </div>
        
        <FormInput 
          label="Priority:"
          value={formData.priority}
          onChange={(e) => handleInputChange('priority', e.target.value)}
          className="mb-6"
          placeholder=""
        />
        
        <div className="mb-6">
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 text-teal-500" />
            <span className="text-sm text-gray-600">I'm not a robot</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            onClick={handleSubmit}
            className="bg-teal-400 text-white px-8 py-3 rounded-lg hover:bg-teal-500 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating, interactive = false, onRatingChange }) => (
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
const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'bg-teal-400';
      case 'On hold': return 'bg-gray-600';
      case 'Closed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <span className={`px-3 py-1 rounded text-white text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

// Ticket Table Row Component
const TicketRow = ({ ticket }) => (
  <tr className="border-b hover:bg-gray-50 transition-colors">
    <td className="py-4 px-6">
      <span className="text-blue-600 font-medium underline cursor-pointer hover:text-blue-700">
        {ticket.id}
      </span>
    </td>
    <td className="py-4 px-6 text-gray-800">{ticket.subject}</td>
    <td className="py-4 px-6">
      <StatusBadge status={ticket.status} />
    </td>
    <td className="py-4 px-6 text-center text-gray-700">{ticket.supportBy}</td>
    <td className="py-4 px-6 text-gray-700">{ticket.date}</td>
    <td className="py-4 px-6">
      <StarRating rating={ticket.rating} />
    </td>
  </tr>
);

// My Tickets Component
const MyTickets = ({ tickets }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  
  const filteredTickets = tickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.id.toString().includes(searchTerm)
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">List of Ticket</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Find ticket"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              className="border border-gray-300 px-3 py-1 rounded-md focus:ring-2 focus:ring-teal-500"
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-600">Entries</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Ticket No.</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Subject</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Support by</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Rate</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket) => (
                <TicketRow key={ticket.id} ticket={ticket} />
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-600">
            Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries
          </span>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-teal-400 text-white rounded">1</button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile View Component
const ProfileView = ({ onEditClick, feedback, onFeedbackChange, onFeedbackSubmit }) => (
  <div className="p-8 bg-teal-400 min-h-screen">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">User Profile</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
        <div className="absolute top-4 right-4">
          <button onClick={onEditClick} className="text-gray-400 hover:text-gray-600">
            <Edit className="w-5 h-5" />
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-gray-600" />
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <div className="text-gray-800">Username</div>
          <div className="text-gray-800">Contact Number</div>
          <div className="text-gray-800">Email</div>
          <div className="text-gray-800">Department</div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Give Your Feedback</h3>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-md mb-4 h-32 bg-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="[Lorem Ipsum]"
          value={feedback}
          onChange={(e) => onFeedbackChange(e.target.value)}
        />
        <div className="flex justify-center mb-4">
          <StarRating rating={0} />
        </div>
        <button 
          onClick={onFeedbackSubmit}
          className="w-full bg-teal-400 text-white py-3 rounded-md hover:bg-teal-500 transition-colors font-medium"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  </div>
);

// Profile Edit Component
const ProfileEdit = ({ userProfile, onInputChange, onUpdate, onCancel }) => (
  <div className="p-8 bg-teal-400 min-h-screen">
    <h2 className="text-3xl font-bold mb-8 text-gray-800">User Profile</h2>
    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={onCancel}
          className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500 transition-colors"
        >
          Edit Account
        </button>
      </div>
      
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
            className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors font-medium"
          >
            Update User
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Profile Component
const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [userProfile, setUserProfile] = useState({
    username: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
    realName: '',
    accessLevel: '',
    projectAccessLevel: ''
  });

  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    setEditMode(false);
  };

  const handleFeedbackSubmit = () => {
    setFeedback('');
  };

  if (editMode) {
    return (
      <ProfileEdit 
        userProfile={userProfile}
        onInputChange={handleInputChange}
        onUpdate={handleUpdate}
        onCancel={() => setEditMode(false)}
      />
    );
  }

  return (
    <ProfileView 
      onEditClick={() => setEditMode(true)}
      feedback={feedback}
      onFeedbackChange={setFeedback}
      onFeedbackSubmit={handleFeedbackSubmit}
    />
  );
};

// Main App Component
const UserDashboard = ({ user = null, onLogout = () => {} }) => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [tickets, setTickets] = useState([
    { id: 1234, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech Support', date: '13/08/21', rating: 0 },
    { id: 1124, subject: 'New ticket issue', status: 'On hold', supportBy: 'Operation Team', date: '14/08/21', rating: 0 },
    { id: 1224, subject: 'New request', status: 'Closed', supportBy: 'Tech Support', date: '13/08/21', rating: 4 },
    { id: 1244, subject: 'Ticket submission', status: 'In Progress', supportBy: 'Operation Team', date: '14/08/21', rating: 0 },
    { id: 1114, subject: 'Login issue', status: 'In Progress', supportBy: 'Tech Support', date: '3/08/21', rating: 0 }
  ]);

  const handleNewTicketSubmit = (formData) => {
    const newTicket = {
      id: Math.floor(Math.random() * 9000) + 1000,
      subject: formData.subject,
      status: 'In Progress',
      supportBy: 'Tech Support',
      date: new Date().toLocaleDateString('en-GB'),
      rating: 0
    };
    setTickets(prev => [...prev, newTicket]);
    setCurrentView('myTickets');
  };

  const renderCurrentView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'newTicket':
        return <NewTicket onSubmit={handleNewTicketSubmit} />;
      case 'myTickets':
        return <MyTickets tickets={tickets} />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        onProfileClick={() => setCurrentView('profile')} 
        onLogout={onLogout}
      />
      <div className="flex flex-1">
        <Sidebar currentView={currentView} onViewChange={setCurrentView} />
        <div className="flex-1 flex flex-col">
          <div className="flex-1"> 
            {renderCurrentView()}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;