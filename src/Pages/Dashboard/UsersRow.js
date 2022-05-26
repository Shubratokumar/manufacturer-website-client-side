import React from "react";

const UsersRow = ({ user, index, refetch }) => {
  const { email, name, role } = user;

  const makeAdmin = () =>{
    refetch()
  }

  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>{<button className="btn btn-xs btn-error">Remove User</button>}</td>
    </tr>
  );
};

export default UsersRow;
