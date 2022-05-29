import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { email } = user;
  const {
    data: profileUser,
    refetch,
    isLoading,
  } = useQuery("user", () =>
    fetch(`https://glacial-bayou-51669.herokuapp.com/user/${email}`, {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //   const {name, location, phoneNumber, linkedIn} = profileUser;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="px-2 lg:px-20 bg-blue-50">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center content-center py-10">
          <div className="card w-full bg-base-100 shadow-xl p-10">
            <h2 className="text-2xl uppercase text-secondary text-center">
              Your Profile
            </h2>
            <div className="flex mt-6 justify-center mb-4">
              <div className="w-60 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <form>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="text-sm">Name</span>
                </label>
                <input
                  value={profileUser?.name}
                  type="text"
                  disabled
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="text-sm">Email Address</span>
                </label>
                <input
                  value={profileUser?.email}
                  type="text"
                  disabled
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="text-sm">Address</span>
                </label>
                <input
                  value={
                    profileUser?.location
                      ? profileUser?.location
                      : "Please update your address"
                  }
                  type="text"
                  disabled
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="text-sm">Contact Number</span>
                </label>
                <input
                  value={
                    profileUser?.phoneNumber
                      ? profileUser?.phoneNumber
                      : "Please update your contact number"
                  }
                  type="text"
                  disabled
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="text-sm">LinkedIn Profile </span>
                </label>
                <input
                  value={
                    profileUser?.linkedIn
                      ? profileUser?.linkedIn
                      : "Please update your linkedIn profile"
                  }
                  type="text"
                  disabled
                  className="input input-bordered w-full max-w-sm"
                />
              </div>
            </form>
          </div>
          <div className="card w-full bg-base-100 shadow-xl p-10">
            {
              <UpdateProfile
                profileUser={profileUser}
                refetch={refetch}
                key={profileUser?._id}
              ></UpdateProfile>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
