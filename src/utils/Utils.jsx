export const isUserLoggedIn = (email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
  
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
  
    return !!user;
  };