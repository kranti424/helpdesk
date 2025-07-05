import React, { useState } from 'react';
import { Search, User, Eye, Download, UserPlus, Users, BarChart3, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const OpTeamDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showModal, setShowModal] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [userProfile, setUserProfile] = useState({
    username: 'john_doe',
    email: 'john@example.com',
    realName: 'John Doe',
    contactNumber: '0123456789',
    department: 'IT',
    accessLevel: 'Admin',
    projectAccessLevel: 'Full Access'
  });
  const [editMode, setEditMode] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  // Sample data
  const tickets = [
    { id: 1234, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21', status: 'In Progress', personInCharge: 'John Doe' },
    { id: 1124, subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21', status: 'On hold', personInCharge: 'Jane Smith' },
    { id: 1224, subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', personInCharge: 'Bob Johnson' },
    { id: 1244, subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', personInCharge: 'Alice Brown' },
    { id: 1114, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '3/08/21', status: 'In Progress', personInCharge: 'Charlie Wilson' }
  ];

  const operations = [
    { id: 1, name: 'Operation Name 1', contact: '0123456789', department: 'ABC' },
    { id: 2, name: 'Operation Name 2', contact: '0123456789', department: 'XYZ' },
    { id: 3, name: 'Operation Name 3', contact: '0123456789', department: 'DEF' }
  ];

  const Sidebar = () => (
    <div className="w-48 bg-gray-100 shadow-md min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-teal-500 mb-8">Helpdesk</h1>
        <nav className="space-y-2">
          {['Dashboard', 'Ticket Approval', 'My Ticket', 'Performance', 'User Profile'].map((item) => (
            <div
              key={item}
              onClick={() => setActiveTab(item)}
              className={`flex items-center space-x-3 p-3 cursor-pointer rounded ${
                activeTab === item ? 'bg-gray-200' : 'hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">
                {item === 'Dashboard' && '📊'}
                {item === 'Ticket Approval' && '🎫'}
                {item === 'My Ticket' && '📋'}
                {item === 'Performance' && '📈'}
                {item === 'User Profile' && '👤'}
              </span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="flex-1 bg-gray-200 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Total Tickets</h3>
          <p className="text-4xl font-bold">12</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Total Solved</h3>
          <p className="text-4xl font-bold">8</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Total Awaiting Approval</h3>
          <p className="text-4xl font-bold">2</p>
        </div>
        <div className="bg-yellow-400 text-white p-6 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Total in Progress</h3>
          <p className="text-4xl font-bold">2</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-teal-400 p-8 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-32 h-32 text-blue-600" />
        </div>
        <div className="space-y-4">
          <div className="bg-teal-400 p-6 rounded-lg flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <User className="w-12 h-12 text-black" />
              <div>
                <p className="text-2xl font-bold text-black">3</p>
                <p className="text-sm text-black">Technical Supports</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users className="w-12 h-12 text-black" />
              <div>
                <p className="text-2xl font-bold text-black">4</p>
                <p className="text-sm text-black">Operation Team</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-400 p-6 rounded-lg">
            <h3 className="text-black font-semibold mb-2">Customer Feedback</h3>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Performance = () => (
    <div className="flex-1 bg-gray-200 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Performance</h1>
      
      <div className="flex gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-md">
          <div className="flex justify-end mb-4">
            <Eye className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-black" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Operation Name</h2>
              <div className="bg-gray-200 p-2 rounded mt-2">
                <p className="text-sm">Contact No: 0123456789</p>
                <p className="text-sm">Department: ABC</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Total Ticket Handle</span>
              <span className="font-bold">5</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Ticket Solved</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span>Ticket Pending</span>
                <span>1</span>
              </div>
              <div className="flex justify-between">
                <span>Ticket in progress</span>
                <span>2</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Rating</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {operations.map((op) => (
            <div key={op.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between min-w-80">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-black" />
                </div>
                <span className="font-semibold">{op.name}</span>
              </div>
              <button className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-500">
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MyTicket = () => (
    <div className="flex-1 bg-gray-200 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">My Ticket</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Find ticket"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-64"
              />
            </div>
          </div>
          <Download className="w-5 h-5 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span>Show:</span>
            <select 
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>Entries</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Ticket No.</th>
                <th className="border p-3 text-left">Subject</th>
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">Priority</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Status</th>
                <th className="border p-3 text-left">Person in charge</th>
                <th className="border p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="border p-3">
                    <button
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setShowModal('ticketDetails');
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      {ticket.id}
                    </button>
                  </td>
                  <td className="border p-3">{ticket.subject}</td>
                  <td className="border p-3">{ticket.category}</td>
                  <td className="border p-3">{ticket.priority}</td>
                  <td className="border p-3">{ticket.date}</td>
                  <td className="border p-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      ticket.status === 'In Progress' ? 'bg-green-100 text-green-800' :
                      ticket.status === 'On hold' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="border p-3">{ticket.personInCharge}</td>
                  <td className="border p-3">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => setShowModal('teamCreation')}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        📋
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">👥</button>
                      <button className="text-green-600 hover:text-green-800">📥</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</span>
          <div className="flex items-center space-x-2">
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 bg-blue-500 text-white rounded">1</span>
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TicketApproval = () => (
    <div className="flex-1 bg-gray-200 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Ticket Approval</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Find ticket"
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span>Show:</span>
            <select className="border rounded px-2 py-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>Entries</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Ticket No.</th>
                <th className="border p-3 text-left">Subject</th>
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">Priority</th>
                <th className="border p-3 text-left">Date</th>
                <th className="border p-3 text-left">Action</th>
                <th className="border p-3 text-left">Assign to</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="border p-3">
                    <button className="text-blue-600 hover:underline">
                      {ticket.id}
                    </button>
                  </td>
                  <td className="border p-3">{ticket.subject}</td>
                  <td className="border p-3">{ticket.category}</td>
                  <td className="border p-3">{ticket.priority}</td>
                  <td className="border p-3">{ticket.date}</td>
                  <td className="border p-3">
                    <div className="flex space-x-2">
                      <button className="text-green-600 hover:text-green-800">✓</button>
                      <button className="text-red-600 hover:text-red-800">✕</button>
                    </div>
                  </td>
                  <td className="border p-3">
                    <select className="border rounded px-2 py-1 bg-gray-100">
                      <option>Select assignee</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                      <option>Bob Johnson</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</span>
          <div className="flex items-center space-x-2">
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 bg-blue-500 text-white rounded">1</span>
            <button className="p-2 border rounded hover:bg-gray-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamCreationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Ticket - Team Creation</h2>
        
        <div className="bg-teal-400 p-6 rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ticket No."
              className="w-full p-3 rounded"
            />
            <input
              type="text"
              placeholder="Team name"
              className="w-full p-3 rounded"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Team Member"
                className="flex-1 p-3 rounded"
              />
              <button className="bg-white p-3 rounded">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
            <textarea
              placeholder="Remark"
              className="w-full p-3 rounded h-24 resize-none"
            />
            <div className="flex justify-center">
              <button className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700">
                Create Team
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowModal(null)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const CloseTicketModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Ticket - Close Ticket</h2>
        
        <div className="bg-teal-400 p-6 rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ticket No."
              className="w-full p-3 rounded"
            />
            <input
              type="text"
              placeholder="Team name"
              className="w-full p-3 rounded"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Team Member"
                className="flex-1 p-3 rounded"
              />
              <button className="bg-white p-3 rounded">
                <UserPlus className="w-5 h-5" />
              </button>
            </div>
            <textarea
              placeholder="Remark"
              className="w-full p-3 rounded h-24 resize-none"
            />
            <div className="flex justify-center">
              <button className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700">
                Close Ticket
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            onClick={() => setShowModal(null)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const TicketDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">Ticket Details</h2>
        
        {selectedTicket && (
          <div className="space-y-3">
            <div><strong>Ticket No:</strong> {selectedTicket.id}</div>
            <div><strong>Date:</strong> {selectedTicket.date}</div>
            <div><strong>Name:</strong> {selectedTicket.personInCharge}</div>
            <div><strong>Dept:</strong> IT</div>
            <div><strong>Title:</strong> {selectedTicket.subject}</div>
            <div><strong>Description:</strong> Issue with login system</div>
            <div><strong>Category:</strong> {selectedTicket.category}</div>
            <div><strong>Type:</strong> Technical</div>
            <div><strong>Priority:</strong> {selectedTicket.priority}</div>
            <div><strong>Status:</strong> {selectedTicket.status}</div>
            <div><strong>Attachment:</strong> None</div>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Update
          </button>
          <button
            onClick={() => setShowModal(null)}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const UserProfile = () => (
    <div className="flex-1 bg-gray-200 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">User Profile</h1>
      
      <div className="bg-teal-400 p-8 rounded-lg">
        <div className="grid grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-lg p-6 relative">
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setEditMode(true)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-black" />
              </div>
              
              <div className="text-center space-y-2">
                <div><strong>Username:</strong> {userProfile.username}</div>
                <div><strong>Contact Number:</strong> {userProfile.contactNumber}</div>
                <div><strong>Email:</strong> {userProfile.email}</div>
                <div><strong>Department:</strong> {userProfile.department}</div>
              </div>
            </div>
          </div>

          {/* Feedback Card */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Give Your Feedback</h3>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="[Lorem Ipsum]"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-3 bg-gray-300 rounded placeholder-gray-600"
              />
              
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5, 6].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-8 h-8 ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    <Star className="w-full h-full fill-current" />
                  </button>
                ))}
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => {
                    alert('Feedback submitted successfully!');
                    setFeedback('');
                    setRating(0);
                  }}
                  className="bg-teal-400 text-white px-6 py-2 rounded hover:bg-teal-500"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EditAccountModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">User Profile</h2>
        
        <div className="bg-teal-400 p-6 rounded-lg mb-6">
          <div className="bg-teal-500 text-white px-4 py-2 rounded mb-4">
            Edit Account
          </div>
          
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              value={userProfile.username}
              onChange={(e) => setUserProfile({...userProfile, username: e.target.value})}
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={userProfile.email}
              onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Real Name"
              value={userProfile.realName}
              onChange={(e) => setUserProfile({...userProfile, realName: e.target.value})}
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Access Level"
              value={userProfile.accessLevel}
              onChange={(e) => setUserProfile({...userProfile, accessLevel: e.target.value})}
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Project Access Level"
              value={userProfile.projectAccessLevel}
              onChange={(e) => setUserProfile({...userProfile, projectAccessLevel: e.target.value})}
              className="w-full p-3 bg-gray-500 text-white placeholder-gray-300 rounded"
            />
          </div>
          
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => {
                alert('User profile updated successfully!');
                setEditMode(false);
              }}
              className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
            >
              Update User
            </button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={() => setEditMode(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Performance':
        return <Performance />;
      case 'My Ticket':
        return <MyTicket />;
      case 'Ticket Approval':
        return <TicketApproval />;
      case 'User Profile':
        return <UserProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 bg-teal-400 text-white p-4 z-40">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Helpdesk</h1>
          <div className="flex items-center space-x-4">
            <span className="bg-black text-white px-2 py-1 rounded text-sm">BM</span>
            <span className="bg-black text-white px-2 py-1 rounded text-sm">BI</span>
            <span>🔔</span>
            <span>👤</span>
            <span>🚪</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full pt-16">
        <Sidebar />
        {renderContent()}
      </div>

      {/* Modals */}
      {showModal === 'teamCreation' && <TeamCreationModal />}
      {showModal === 'closeTicket' && <CloseTicketModal />}
      {showModal === 'ticketDetails' && <TicketDetailsModal />}
      {editMode && <EditAccountModal />}
    </div>
  );
};

export default OpTeamDashboard;