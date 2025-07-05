// Dummy user data for authentication
export const dummyUsers = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    email: 'admin@helpdesk.com',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: 2,
    username: 'user1',
    password: 'password123',
    email: 'user1@helpdesk.com',
    role: 'user',
    name: 'John Doe'
  },
  {
    id: 3,
    username: 'agent',
    password: 'agent123',
    email: 'agent@helpdesk.com',
    role: 'agent',
    name: 'Support Agent'
  },
  {
    id: 4,
    username: 'demo',
    password: 'demo123',
    email: 'demo@helpdesk.com',
    role: 'user',
    name: 'Demo User'
  }
];

// Authentication functions
export const authenticateUser = (username, password) => {
  const user = dummyUsers.find(
    u => u.username === username && u.password === password
  );
  
  if (user) {
    // Remove password from returned user object for security
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      user: userWithoutPassword,
      message: 'Login successful'
    };
  }
  
  return {
    success: false,
    user: null,
    message: 'Invalid username or password'
  };
};

export const registerUser = (username, password, email) => {
  // Check if user already exists
  const existingUser = dummyUsers.find(
    u => u.username === username || u.email === email
  );
  
  if (existingUser) {
    return {
      success: false,
      message: 'Username or email already exists'
    };
  }
  
  // Create new user
  const newUser = {
    id: dummyUsers.length + 1,
    username,
    password,
    email,
    role: 'user',
    name: username
  };
  
  // Add to dummy users array
  dummyUsers.push(newUser);
  
  const { password: _, ...userWithoutPassword } = newUser;
  
  return {
    success: true,
    user: userWithoutPassword,
    message: 'Registration successful'
  };
};

export const resetPassword = (email) => {
  const user = dummyUsers.find(u => u.email === email);
  
  if (user) {
    // In a real app, you would send an email here
    console.log(`Password reset email sent to ${email}`);
    return {
      success: true,
      message: 'Password reset email sent successfully'
    };
  }
  
  return {
    success: false,
    message: 'Email not found'
  };
};