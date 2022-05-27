import React from "react";
import { toast } from "react-hot-toast";

const UsersRow = ({ user, index, refetch, setDeleteUser }) => {
  const { email, name, role } = user;

  const makeAdmin = () => {
    fetch(`https://glacial-bayou-51669.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faied to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made ${name} as a new Admin.`);
          refetch();
        }
      });
  };

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <button className="btn btn-xs btn-success">Admin</button>
        )}
      </td>
      <td>
        {
          <label
            onClick={() => setDeleteUser(user)}
            for="delete-user-modal"
            className="btn modal-button btn-xs btn-error"
          >
            Remove User
          </label>
        }
      </td>
    </tr>
  );
};

export default UsersRow;
