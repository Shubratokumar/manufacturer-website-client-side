import React from "react";
import { toast } from 'react-hot-toast';

const UsersRow = ({ user, index, refetch }) => {
  const { email, name, role } = user;

  const makeAdmin = () =>{
      fetch(`http://localhost:5000/user/admin/${email}`, {
          method : "PUT", 
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(res => {
        if (res.status === 403) {
            toast.error("Faied to make an admin");
          }
        return res.json()})
      .then(data => {
        if (data.modifiedCount > 0) {
            toast.success(`Successfully made ${name} as a new Admin.`);
            refetch();
        }
      })
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
