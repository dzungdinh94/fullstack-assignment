import React, { useState, useEffect } from "react";
import firebase from "./config/firebaseConfig";
import { signInWithGoogle } from "./api/auth";
import UserListing from "./component/UserListing";
import { getAuth, signOut } from "firebase/auth";
import useUserManagement from "./hooks/useUserManagement";
import { useRoles } from "./context/RoleContext";
import { getRandomUserData } from "./utils/generateData";
import Header from "./component/Header";

function App() {
  const {
    users,
    createUser: saveUser,
    currentUserRole,
    updateUser,
    deleteUser,
  } = useUserManagement();
  const getPermissions = useRoles();

  // const roles = ["Scrum Master", "Software Engineer", "Quality Assurance"];
  // const randomIndex = Math.floor(Math.random() * roles.length);
  const permissions = getPermissions(currentUserRole);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const createUser = (role) => {
    const newUser = getRandomUserData(role);
    saveUser(newUser);
  };

  return (
    <div>
      <Header
        isAuthenticated={user}
        userName={user?.email}
        onLogin={signInWithGoogle}
        onLogout={signOut}
      />
      {user && (
        <div className="p-3">
          <div>
            {permissions.canCreate.includes("Software Engineer") && (
              <button
                className="btn btn-outline-success me-3"
                onClick={() => createUser("Software Engineer")}
              >
                <i class="fas fa-user-plus me-2"></i>Create Software Engineer
              </button>
            )}
            {permissions.canCreate.includes("Quality Assurance") && (
              <button
                className="btn btn-outline-success me-3"
                onClick={() => createUser("Quality Assurance")}
              >
                <i class="fas fa-user-plus me-2"></i>Create Quality Assurance
              </button>
            )}
            {permissions.canCreate.includes("Scrum Master") && (
              <button
                className="btn btn-outline-success me-3"
                onClick={() => createUser("Scrum Master")}
              >
                <i class="fas fa-user-plus me-2"></i>Create Scrum Master
              </button>
            )}
          </div>
          <UserListing
            users={users}
            updateUser={updateUser}
            deleteUser={deleteUser}
            currentUserRole={currentUserRole}
          />
        </div>
      )}
    </div>
  );
}

export default App;
