import React, {useState} from "react";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
import UsersRow from "./UsersRow";
import DeleteUserModal from './DeleteUserModal';

const Users = () => {
  const [deleteUser, setDeleteUser] = useState(null);
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
      <h3 className="text-2xl text-center font-semibold text-secondary mb-2">
        Manage Users
      </h3>
        <table className="table table-normal w-full">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UsersRow
                user={user}
                key={user._id}
                index={index}
                setDeleteUser={setDeleteUser}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
      {
        deleteUser && <DeleteUserModal
        deleteUser={deleteUser}
        setDeleteUser={setDeleteUser}
        refetch={refetch}
        ></DeleteUserModal>
      }
    </div>
  );
};

export default Users;
