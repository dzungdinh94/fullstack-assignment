import { useState, useEffect } from 'react';

export default function useUserManagement() {
  const [users, setUsers] = useState([]);
  const [currentUserRole, setCurrentUserRole] = useState("Scrum Master")
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers && storedUsers.length > 0) setUsers(storedUsers);
  }, []);

  useEffect(() => {
      localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const createUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (id, updatedUser) => {
    console.log(id,updatedUser)
    setUsers(users.map(user => user.id === id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers([...users].filter(user => user.id !== id));
  };

  return { users, createUser, updateUser, deleteUser, currentUserRole };
}
