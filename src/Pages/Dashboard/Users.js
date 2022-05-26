import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shared/Loading';
import UsersRow from './UsersRow';

const Users = () => {
    const { data : users, refetch, isLoading } = useQuery( 'users', ()=> 
    fetch('http://localhost:5000/user',{
        headers: {
            method: "GET",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className="overflow-x-auto">
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
                refetch={refetch}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Users;