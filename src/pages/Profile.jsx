import React, { useContext } from "react";
import photoImg from "../assets/photo.jpeg";
import { AuthContext } from "../Provider/AuthProvider";
import { MdModeEdit } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const editProfile = () => {};
  return (
    <div className=" space-y-5 flex flex-col justify-center items-center min-h-[500px]">
      <div className="space-y-5 relative">
        <h1 className="text-xl">Profile Picture</h1>
        <img
          onClick={editProfile}
          className="h-50 w-50 object-cover rounded-full ml-5"
          src={user && user.photoURL ? user.photoURL : photoImg}
          alt=""
        />
        <div
          onClick={() => document.getElementById("modalOpen").showModal()}
          className="flex items-center gap-1 absolute  -right-20 top-0 bg-gray-700 border border-gray-400 px-2 py-1 rounded-full cursor-pointer"
        >
          <MdModeEdit /> Edit
        </div>

        <dialog id="modalOpen" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm  btn-ghost absolute right-2 top-2">
                <IoIosClose size={30} />
              </button>
            </form>
            <form onSubmit={editProfile} className="flex flex-col ">
              <h3 className="font-bold text-lg">Edit Profile</h3>

              {/* profile picture URL: */}
              <label className="input validator mt-5">
                <input
                  type="url"
                  placeholder="https://"
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                />
              </label>
              <p className="validator-hint">Must be valid URL</p>

              {/* profile name: */}
              <div>
                <label className="input validator">
                  <input
                    type="text"
                    placeholder="Name"
                    pattern="[A-Za-z]+"
                    minlength="3"
                    title="Only letters are allowed"
                  />
                </label>
                <p className="validator-hint">
                  Must be 3 characters & containing only letters
                </p>
              </div>

              {/* profile email: */}

              <label className="input validator">
                <input type="email" placeholder="mail@gmail.com" />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>

              {/* password:  */}

              <label className="input validator mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
              <div className="flex justify-between">
                <div></div>
                <button type="submit" className="btn w-20 mt-5 ">
                  Save
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <h2 onClick={editProfile} className="text-3xl font-semibold">
        <span className="font-bold"> Name:</span> {user && user.displayName}
      </h2>
      <p onClick={editProfile} className="">
        <span className="font-bold">User-Name : </span> {user && user.email}
      </p>
    </div>
  );
};

export default Profile;
