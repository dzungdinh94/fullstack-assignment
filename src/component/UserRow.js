import React from "react";

function UserRow({user, permissions, onEdit, onDelete}) {
  return (
    <tr>
      <td>
        <div
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: user.color,
            color: "white",
            width: "50px",
            height: "50px",
            textAlign: "center",
          }}
        >
          {user.firstName.charAt(0)}
        </div>
      </td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.designation}</td>
      <td>{user.dob}</td>
      <td>
        {permissions.canEdit.includes(user.designation) && (
          <button
            className="btn btn-primary me-3"
            onClick={() => onEdit(user)}
          >
            <i class="fas fa-edit"></i> Edit
          </button>
        )}
        {permissions.canDelete.includes(user.designation) && (
          <button
            className="btn btn-danger"
            onClick={() => onDelete(user)}
          >
            <i class="fas fa-trash-alt"></i> Delete
          </button>
        )}
      </td>
    </tr>
  );
}
export default React.memo(UserRow)