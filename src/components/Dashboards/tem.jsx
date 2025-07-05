import React, { useState } from 'react';
import { User, Users, BarChart3, Ticket, Search, Edit, Star, Eye, Download, UserPlus, X, Plus, RefreshCw } from 'lucide-react';

const TechTeamDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showEditAccount, setShowEditAccount] = useState(false);
  const [showTeamCreation, setShowTeamCreation] = useState(false);
  const [showCloseTicket, setShowCloseTicket] = useState(false);
  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const [tickets, setTickets] = useState([
    { id: 1234, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21', status: 'In Progress', person: 'John Doe' },
    { id: 1124, subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21', status: 'On hold', person: 'Jane Smith' },
    { id: 1224, subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', person: 'Bob Johnson' },
    { id: 1244, subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', person: 'Alice Brown' },
    { id: 1114, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21', status: 'In Progress', person: 'Mike Wilson' }
  ]);

  const [userProfile, setUserProfile] = useState({
    username: 'john.doe',
    email: 'john.doe@company.com',
    realName: 'John Doe',
    contactNumber: '0123456789',
    department: 'IT Support',
    accessLevel: 'Admin',
    projectAccessLevel: 'Full Access'
  });

  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const techSupports = [
    { id: 1, name: 'Technical Support 1', contact: '0123456789', department: 'ABC' },
    { id: 2, name: 'Technical Support 2', contact: '0123456789', department: 'DEF' },
    { id: 3, name: 'Technical Support 3', contact: '0123456789', department: 'GHI' }
  ];

  const dashboardStats = {
    totalTickets: 12,
    totalSolved: 8,
    totalAwaiting: 2,
    totalInProgress: 2,
    technicalSupports: 3,
    operationTeam: 4,
    customerFeedback: 4.5
  };

  const performanceData = {
    totalTicketHandle: 5,
    ticketSolved: 2,
    ticketPending: 1,
    ticketInProgress: 2,
    rating: 4
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTickets.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedTickets = filteredTickets.slice(startIndex, startIndex + entriesPerPage);

  const handleTicketAction = (ticketId, action) => {
    const ticket = tickets.find(t => t.id === ticketId);
    setSelectedTicket(ticket);
    if (action === 'details') {
      setShowTicketDetails(true);
    } else if (action === 'close') {
      setShowCloseTicket(true);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress': return 'bg-green-500';
      case 'On hold': return 'bg-blue-500';
      case 'Closed': return 'bg-gray-800';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const renderModal = (show, onClose, title, children) => {
    if (!show) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  const sidebarItems = [
    { name: 'Dashboard', icon: BarChart3 },
    { name: 'My Ticket', icon: Ticket },
    { name: 'Performance', icon: BarChart3 },
    { name: 'User Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-teal-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold italic">Helpdesk</h1>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button className="bg-black text-white px-2 py-1 rounded text-sm">BM</button>
            <button className="bg-teal-600 text-white px-2 py-1 rounded text-sm">BI</button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="bg-gray-200 w-64 min-h-screen p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.name
                    ? 'bg-gray-300 text-black'
                    : 'text-gray-700 hover:bg-gray-300'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Dashboard View */}
          {activeTab === 'Dashboard' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-500 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Total Tickets</h3>
                  <p className="text-3xl font-bold">{dashboardStats.totalTickets}</p>
                </div>
                <div className="bg-green-500 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Total Solved</h3>
                  <p className="text-3xl font-bold">{dashboardStats.totalSolved}</p>
                </div>
                <div className="bg-red-500 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Total Awaiting Approval</h3>
                  <p className="text-3xl font-bold">{dashboardStats.totalAwaiting}</p>
                </div>
                <div className="bg-yellow-500 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold">Total in Progress</h3>
                  <p className="text-3xl font-bold">{dashboardStats.totalInProgress}</p>
                </div>
              </div>

              {/* Charts and Team Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-teal-400 p-6 rounded-lg">
                  <BarChart3 className="w-32 h-32 mx-auto text-blue-800" />
                </div>
                <div className="space-y-4">
                  <div className="bg-teal-400 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-black" />
                      <div>
                        <p className="font-semibold">{dashboardStats.technicalSupports}</p>
                        <p className="text-sm">Technical Supports</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-400 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="w-8 h-8 text-black" />
                      <div>
                        <p className="font-semibold">{dashboardStats.operationTeam}</p>
                        <p className="text-sm">Operation Team</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-400 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Customer Feedback</h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(Math.floor(dashboardStats.customerFeedback))}
                      <span className="ml-1 text-sm opacity-75">({dashboardStats.customerFeedback})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Ticket View */}
          {activeTab === 'My Ticket' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">My Ticket</h2>
              
              {/* Controls */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Find ticket"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border rounded-lg w-64"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>Show:</span>
                    <select
                      value={entriesPerPage}
                      onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                      className="border rounded px-2 py-1"
                    >
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                    </select>
                    <span>Entries</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowTeamCreation(true)}
                  className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create Team</span>
                </button>
              </div>

              {/* Tickets Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket No.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Person in charge</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-blue-600 font-medium">{ticket.id}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`font-medium ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{ticket.person}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleTicketAction(ticket.id, 'details')}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleTicketAction(ticket.id, 'edit')}
                              className="text-green-600 hover:text-green-800"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleTicketAction(ticket.id, 'download')}
                              className="text-purple-600 hover:text-purple-800"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
                  <div className="text-sm text-gray-700">
                    Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, filteredTickets.length)} of {filteredTickets.length} entries
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                      ‹‹
                    </button>
                    <span className="px-3 py-1 bg-teal-500 text-white rounded">{currentPage}</span>
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                      ››
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance View */}
          {activeTab === 'Performance' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Performance</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Technical Support Profile */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Technical Support Name</h3>
                      <p className="text-sm text-gray-600">Contact No: 0123456789</p>
                      <p className="text-sm text-gray-600">Department: ABC</p>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span>Total Ticket Handle</span>
                        <span className="font-semibold">{performanceData.totalTicketHandle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ticket Solved</span>
                        <span className="font-semibold">{performanceData.ticketSolved}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ticket Pending</span>
                        <span className="font-semibold">{performanceData.ticketPending}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ticket in progress</span>
                        <span className="font-semibold">{performanceData.ticketInProgress}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm mr-2">Rating</span>
                      <div className="flex space-x-1">
                        {renderStars(performanceData.rating)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team List */}
                <div className="space-y-4">
                  {techSupports.map((support) => (
                    <div key={support.id} className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{support.name}</h4>
                        </div>
                      </div>
                      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">
                        View details
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* User Profile View */}
          {activeTab === 'User Profile' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">User Profile</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Profile Card */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-10 h-10 text-black" />
                    </div>
                    <button
                      onClick={() => setShowEditAccount(true)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div><strong>Username:</strong> {userProfile.username}</div>
                    <div><strong>Contact Number:</strong> {userProfile.contactNumber}</div>
                    <div><strong>Email:</strong> {userProfile.email}</div>
                    <div><strong>Department:</strong> {userProfile.department}</div>
                  </div>
                </div>

                {/* Feedback Form */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold mb-4">Give Your Feedback</h3>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="[Lorem Ipsum]"
                    className="w-full p-3 border rounded-lg mb-4 h-24 resize-none"
                  />
                  <div className="flex items-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 w-full">
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Account Modal */}
      {renderModal(showEditAccount, () => setShowEditAccount(false), 'Edit Account', (
        <div className="bg-teal-400 p-6 rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={userProfile.username}
              onChange={(e) => setUserProfile({...userProfile, username: e.target.value})}
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="email"
              placeholder="Email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="text"
              placeholder="Real Name"
              value={userProfile.realName}
              onChange={(e) => setUserProfile({...userProfile, realName: e.target.value})}
              className="w-full p-3 rounded-lg border"
            />
            <select className="w-full p-3 rounded-lg border">
              <option>Access Level</option>
              <option>Admin</option>
              <option>User</option>
              <option>Guest</option>
            </select>
            <select className="w-full p-3 rounded-lg border">
              <option>Project Access Level</option>
              <option>Full Access</option>
              <option>Limited Access</option>
              <option>Read Only</option>
            </select>
            <button className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
              Update User
            </button>
          </div>
        </div>
      ))}

      {/* Team Creation Modal */}
      {renderModal(showTeamCreation, () => setShowTeamCreation(false), 'My Ticket - Team Creation', (
        <div className="bg-teal-400 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ticket No."
                className="w-full p-3 rounded-lg border"
              />
              <input
                type="text"
                placeholder="Team name"
                className="w-full p-3 rounded-lg border"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Team Member"
                  className="flex-1 p-3 rounded-lg border"
                />
                <button className="bg-white p-3 rounded-lg">
                  <UserPlus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <textarea
              placeholder="Remark"
              className="w-full p-3 rounded-lg border h-32 resize-none"
            />
          </div>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button className="bg-white p-3 rounded-lg">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
              Create Team
            </button>
          </div>
        </div>
      ))}

      {/* Close Ticket Modal */}
      {renderModal(showCloseTicket, () => setShowCloseTicket(false), 'My Ticket - Close Ticket', (
        <div className="bg-teal-400 p-6 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Ticket No."
                value={selectedTicket?.id || ''}
                className="w-full p-3 rounded-lg border"
                readOnly
              />
              <input
                type="text"
                placeholder="Team name"
                className="w-full p-3 rounded-lg border"
              />
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Team Member"
                  className="flex-1 p-3 rounded-lg border"
                />
                <button className="bg-white p-3 rounded-lg">
                  <UserPlus className="w-5 h-5" />
                </button>
              </div>
            </div>
            <textarea
              placeholder="Remark"
              className="w-full p-3 rounded-lg border h-32 resize-none"
            />
          </div>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button className="bg-white p-3 rounded-lg">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              Close Ticket
            </button>
          </div>
        </div>
      ))}

      {/* Ticket Details Modal */}
      {renderModal(showTicketDetails, () => setShowTicketDetails(false), 'Ticket Details', (
        <div className="space-y-4">
          {selectedTicket && (
            <div className="bg-white p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
                  <p><strong>Date:</strong> {selectedTicket.date}</p>
                  <p><strong>Name:</strong> {selectedTicket.person}</p>
                  <p><strong>Dept:</strong> IT Support</p>
                </div>
                <div>
                  <p><strong>Title:</strong> {selectedTicket.subject}</p>
                  <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p><strong>Category:</strong> {selectedTicket.category}</p>
                  <p><strong>Type:</strong> Support Request</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p><strong>Priority:</strong> <span className={getPriorityColor(selectedTicket.priority)}>{selectedTicket.priority}</span></p>
                  <p><strong>Status:</strong> <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(selectedTicket.status)}`}>{selectedTicket.status}</span></p>
                </div>
                <div>
                  <p><strong>Attachment:</strong> No attachments</p>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={() => {
                    setShowTicketDetails(false);
                    // Add update functionality here
                  }}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setShowTicketDetails(false);
                    setShowCloseTicket(true);
                  }}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechTeamDashboard;