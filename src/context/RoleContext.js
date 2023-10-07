import React, { createContext, useContext } from 'react';

const RolesContext = createContext();

export const useRoles = () => {
  return useContext(RolesContext);
};

export const RolesProvider = ({ children }) => {
  const getPermissions = (role) => {
    switch (role) {
      case 'Scrum Master':
        return {
          canCreate: ['Software Engineer', 'Quality Assurance', 'Scrum Master'],
          canEdit: ['Software Engineer', 'Quality Assurance', 'Scrum Master'],
          canDelete: ['Software Engineer', 'Quality Assurance', 'Scrum Master']
        };
      case 'Software Engineer':
        return {
          canCreate: ['Software Engineer', 'Quality Assurance'],
          canEdit: ['Software Engineer', 'Quality Assurance'],
          canDelete: ['Software Engineer', 'Quality Assurance']
        };
      case 'Quality Assurance':
        return {
          canCreate: ['Quality Assurance'],
          canEdit: ['Quality Assurance'],
          canDelete: ['Quality Assurance']
        };
      default:
        return { canCreate: [], canEdit: [], canDelete: [] };
    }
  };

  return (
    <RolesContext.Provider value={getPermissions}>
      {children}
    </RolesContext.Provider>
  );
};
