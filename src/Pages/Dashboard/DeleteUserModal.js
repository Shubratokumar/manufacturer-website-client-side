import React from "react";
import { toast } from "react-hot-toast";

const DeleteUserModal = ({ deleteUser, refetch, setDeleteUser }) => {
  const { name, email } = deleteUser;

  const confirmDelete = (email) => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.deletedCount) {
          toast.success(`Delete ${name} successfully.`);
          setDeleteUser(null);
          refetch();
        } else {
          toast.error("Failed to delete.");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete {name}!
          </h3>
          <p className="py-4">
            Once you remove {name}. His or her information will be removed from
            UI as well as Database. So, think once before removing {name}.
          </p>
          <div className="modal-action">
            <button
              onClick={() => confirmDelete(email)}
              className="btn btn-xs btn-error"
            >
              Remove User
            </button>
            <label for="delete-user-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
