import React, { useState } from 'react';
import { 
  Settings, 
  Database, 
  BarChart3, 
  History, 
  User, 
  Search, 
  Edit3, 
  Trash2,
  Star,
  StarHalf,
  Menu,
  X,
  ChevronDown,
  CheckCircle,
  Clock,
  AlertCircle,
  Headphones,
  UserCheck
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntries, setShowEntries] = useState(10);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  // Sample data
  const dashboardStats = {
    totalTickets: 12,
    totalSolved: 8,
    totalAwaiting: 2,
    totalInProgress: 2,
    technicalSupports: 3,
    operationTeam: 4,
    customerRating: 4.5
  };

  const users = [
    { id: 'ABC123', name: 'Abu', department: 'IT', specialty: 'Software' },
    { id: 'ABC124', name: 'Ahmad', department: 'Software', specialty: 'Networking' },
    { id: 'ABC125', name: 'Ali', department: 'Technical', specialty: 'Hardware' }
  ];

  const userLogs = [
    { 
      no: 1, 
      dateSignIn: '130821 / 0800', 
      staffId: 'XL000001', 
      department: 'OT', 
      activity: 'Create Team', 
      dateSignOut: '130821 / 0815' 
    },
    { 
      no: 2, 
      dateSignIn: '130821 / 0805', 
      staffId: '', 
      department: '', 
      activity: '', 
      dateSignOut: '130821 / 0810' 
    }
  ];

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

  const StatCard = ({ title, value, color, icon: Icon }) => (
    <div className={`${color} rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-transform`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        {Icon && <Icon size={32} className="text-white/60" />}
      </div>
    </div>
  );

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={20} className="text-yellow-400 fill-current" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={20} className="text-yellow-400 fill-current" />);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={20} className="text-gray-300" />);
    }
    
    return stars;
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Tickets" 
          value={dashboardStats.totalTickets} 
          color="bg-blue-500" 
          icon={BarChart3}
        />
        <StatCard 
          title="Total Solved" 
          value={dashboardStats.totalSolved} 
          color="bg-green-500" 
          icon={CheckCircle}
        />
        <StatCard 
          title="Total Awaiting Approval" 
          value={dashboardStats.totalAwaiting} 
          color="bg-red-500" 
          icon={AlertCircle}
        />
        <StatCard 
          title="Total In Progress" 
          value={dashboardStats.totalInProgress} 
          color="bg-yellow-500" 
          icon={Clock}
        />
      </div>

      {/* Chart and Team Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-teal-400 rounded-lg p-6 text-white">
          <div className="flex items-center justify-center h-40">
            <BarChart3 size={80} className="text-white/60" />
          </div>
          <p className="text-center mt-4 text-white/80">Analytics Chart</p>
        </div>

        {/* Team Info and Feedback */}
        <div className="space-y-4">
          <div className="bg-teal-400 rounded-lg p-6 text-white">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <Headphones size={32} className="mx-auto mb-2 text-white/80" />
                <p className="text-2xl font-bold">{dashboardStats.technicalSupports}</p>
                <p className="text-sm text-white/80">Technical Supports</p>
              </div>
              <div className="text-center">
                <UserCheck size={32} className="mx-auto mb-2 text-white/80" />
                <p className="text-2xl font-bold">{dashboardStats.operationTeam}</p>
                <p className="text-sm text-white/80">Operation Team</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-400 rounded-lg p-6 text-white">
            <h3 className="text-lg font-semibold mb-3">Customer Feedback</h3>
            <div className="flex items-center justify-center space-x-1">
              {renderStars(dashboardStats.customerRating)}
            </div>
            <p className="text-center mt-2 text-white/80">
              {dashboardStats.customerRating}/5.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDatabase = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Database</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {['User', 'Operation Team', 'Technical Support'].map((tab) => (
          <button
            key={tab}
            className="flex-1 py-2 px-4 text-center rounded-md transition-colors bg-teal-400 text-white font-medium"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Find ticket"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-3 py-2 w-64"
          />
        </div>
        <div className="flex items-center space-x-2">
          <span>Show:</span>
          <select
            value={showEntries}
            onChange={(e) => setShowEntries(Number(e.target.value))}
            className="border rounded-md px-3 py-2"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>Entries</span>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Staff ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Specialty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Setting
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.specialty}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Edit3 size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Showing 1 to {users.length} of {users.length} entries
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm">«</button>
          <button className="px-3 py-1 bg-teal-400 text-white rounded-md text-sm">1</button>
          <button className="px-3 py-1 border rounded-md text-sm">»</button>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
      
      <div className="bg-white rounded-lg shadow">
        {/* General Section */}
        <div className="border-b">
          <div className="bg-teal-400 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-semibold">General</span>
            <ChevronDown size={20} />
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Language</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-gray-800 text-white rounded text-sm">BM</button>
                <button className="px-3 py-1 border rounded text-sm">BI</button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Data Backup</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Connect To Section */}
        <div className="border-b">
          <div className="bg-teal-400 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-semibold">Connect To</span>
            <ChevronDown size={20} />
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>GoDash</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>SuperController</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="border-b">
          <div className="bg-teal-400 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-semibold">Email</span>
            <ChevronDown size={20} />
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <span>Enable SMTP</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Authorization Section */}
        <div className="border-b">
          <div className="bg-teal-400 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-semibold">Authorization</span>
            <ChevronDown size={20} />
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span>Edit authorization</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span>Authority Level</span>
              <select className="border rounded px-3 py-1">
                <option>Select Level</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>User</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Section */}
        <div>
          <div className="bg-teal-400 text-white px-6 py-3 flex items-center justify-between">
            <span className="font-semibold">Notification</span>
            <ChevronDown size={20} />
          </div>
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <span>Enable Notification</span>
              <button className="text-green-600">
                <CheckCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserLogHistory = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">User Log History</h2>
      
      <div className="flex items-center space-x-2 mb-4">
        <span>Show:</span>
        <select
          value={showEntries}
          onChange={(e) => setShowEntries(Number(e.target.value))}
          className="border rounded-md px-3 py-2"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span>Entries</span>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date/Sign InTime
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Staff ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Activity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date/Sign Out time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userLogs.map((log) => (
              <tr key={log.no} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.no}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.dateSignIn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.staffId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.activity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {log.dateSignOut}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Showing 1 to 5 of 5 entries
        </span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm">«</button>
          <button className="px-3 py-1 bg-teal-400 text-white rounded-md text-sm">1</button>
          <button className="px-3 py-1 border rounded-md text-sm">»</button>
        </div>
      </div>
    </div>
  );

  const renderUserProfile = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <User size={32} className="text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Profile Information</h3>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-800">
              <Edit3 size={20} />
            </button>
          </div>
          
          <div className="space-y-3 text-sm text-gray-600">
            <div>
              <span className="font-medium">Username:</span>
              <span className="ml-2">{userProfile.username || 'Not set'}</span>
            </div>
            <div>
              <span className="font-medium">Contact Number:</span>
              <span className="ml-2">Not set</span>
            </div>
            <div>
              <span className="font-medium">Email:</span>
              <span className="ml-2">{userProfile.email || 'Not set'}</span>
            </div>
            <div>
              <span className="font-medium">Department:</span>
              <span className="ml-2">Not set</span>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Give Your Feedback</h3>
          <div className="space-y-4">
            <textarea
              placeholder="[Lorem Ipsum]"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-3 border rounded-md resize-none h-24"
            />
            <div className="flex justify-center space-x-1">
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
            <button className="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-500 transition-colors">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Edit Account Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-gray-800 mb-4 bg-teal-400 text-white px-4 py-2 rounded-md">
          Edit Account
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={userProfile.username}
              onChange={(e) => setUserProfile({...userProfile, username: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input
              type="password"
              value={userProfile.currentPassword}
              onChange={(e) => setUserProfile({...userProfile, currentPassword: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={userProfile.newPassword}
              onChange={(e) => setUserProfile({...userProfile, newPassword: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              value={userProfile.confirmPassword}
              onChange={(e) => setUserProfile({...userProfile, confirmPassword: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Real Name</label>
            <input
              type="text"
              value={userProfile.realName}
              onChange={(e) => setUserProfile({...userProfile, realName: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Access Level</label>
            <select
              value={userProfile.accessLevel}
              onChange={(e) => setUserProfile({...userProfile, accessLevel: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Access Level</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Access Level</label>
            <select
              value={userProfile.projectAccessLevel}
              onChange={(e) => setUserProfile({...userProfile, projectAccessLevel: e.target.value})}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Project Access Level</option>
              <option value="full">Full Access</option>
              <option value="limited">Limited Access</option>
              <option value="readonly">Read Only</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="bg-teal-400 text-white px-6 py-2 rounded-md hover:bg-teal-500 transition-colors">
            Update User
          </button>
        </div>
      </div>
    </div>
  );

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'userlog', label: 'User Log History', icon: History },
    { id: 'profile', label: 'User Profile', icon: User }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'database':
        return renderDatabase();
      case 'settings':
        return renderSettings();
      case 'userlog':
        return renderUserLogHistory();
      case 'profile':
        return renderUserProfile();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="bg-teal-400 text-white p-4 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${sidebarOpen ? 'block' : 'hidden'}`}>
            Helpdesk
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:text-gray-200"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === item.id ? 'border-r-2 border-teal-400 bg-teal-50 text-teal-600' : 'text-gray-700'
              }`}
            >
              <item.icon size={20} />
              <span className={`ml-3 ${sidebarOpen ? 'block' : 'hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {renderContent()}
        </div>
      </div>
    
  );
};

export default AdminDashboard;