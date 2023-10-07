import React, { useEffect, useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: 500,
    transform: "translate(-50%, -50%)",
  },
};
export function EditUserModal({ user, onSave, onClose, modalIsOpen }) {
  const [editedUser, setEditedUser] = useState(user);

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedUser);
    onClose();
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={onClose} style={customStyles}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header mb-5">
            <h4 className="modal-title">Edit User</h4>
            <button
              type="button"
              className="btn btn-light close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group row mb-3">
              <label htmlFor="firstName" className="col-sm-4 col-form-label">
                First Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={editedUser?.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="lastName" className="col-sm-4 col-form-label">
                Last Name:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={editedUser?.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="lastName" className="col-sm-4 col-form-label">
                Email Address:
              </label>
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={editedUser?.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="form-group row mb-3">
              <label htmlFor="lastName" className="col-sm-4 col-form-label">
                Designation:
              </label>
              <div className="col-sm-8">
                <select
                  name="designation"
                  value={editedUser?.designation}
                  onChange={handleChange}
                  className="form-control"
                  id="designation"
                >
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Quality Assurance">Quality Assurance</option>
                  <option value="Scrum Master">Scrum Master</option>
                </select>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label htmlFor="lastName" className="col-sm-4 col-form-label">
                Date of Birth:
              </label>
              <div className="col-sm-8">
                <input
                  type="date"
                  name="dob"
                  value={editedUser?.dob}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary me-3"
              onClick={onClose}
            >
              Cancel
            </button>
            
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
