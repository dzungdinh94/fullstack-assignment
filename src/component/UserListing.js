import React, { useCallback, useState } from "react";
import { useRoles } from "../context/RoleContext";
import { EditUserModal } from "./EditUserModal";
import UserRow from "./UserRow";

function UserListing({ users, updateUser, deleteUser, currentUserRole }) {
  const getPermissions = useRoles();
  const permissions = getPermissions(currentUserRole);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleEditClick = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const handleSave = useCallback(
    (editedUser) => {
      updateUser(editedUser.id, editedUser);
      setSelectedUser(null);
    },
    [updateUser]
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onEdit = useCallback(
    (user) => {
      handleEditClick(user);
      openModal();
    },
    [handleEditClick, openModal]
  );

  const onDelete = useCallback(
    (user) => {
      deleteUser(user.id);
    },
    [deleteUser]
  );

  return (
    <React.Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Designation</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              permissions={permissions}
              user={user}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
      <EditUserModal
        modalIsOpen={modalIsOpen}
        onSave={handleSave}
        user={selectedUser}
        onClose={closeModal}
      />
    </React.Fragment>
  );
}

export default UserListing;
