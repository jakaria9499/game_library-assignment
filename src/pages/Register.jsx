import React, { use } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const {
    createUser,
    setUser,
    updateUser,
    signInWithGoogle,
    signInWithGitHub,
  } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...createdUser, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(createdUser);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogle = () => {
    console.log("google sign in");
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };
  const handleGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content w-full flex-col gap-10">
        <h1 className="text-2xl font-bold">Welcome to Register page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* profile name: */}
              <div>
                <h1 className="label">Name</h1>
                <label className="input validator">
                  <input
                    type="text"
                    placeholder="Enter Full name"
                    pattern="[A-Za-z ]+"
                    minlength="3"
                    title="Only letters are allowed"
                    name="name"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Must be 3 characters & containing only letters
                </div>
              </div>
              {/* profile email: */}
              <h1 className="label">Email</h1>
              <label className="input validator">
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>

              {/* profile picture URL: */}
              <h1 className="label">Profile Picture URL</h1>
              <label className="input validator ">
                <input
                  type="url"
                  placeholder="https://"
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                  name="photo"
                  required
                />
              </label>
              <p className="validator-hint hidden">Must be valid URL</p>
              {/* password:  */}
              <h1 className="label">Password</h1>
              <label className="input validator ">
                <input
                  type="password"
                  placeholder="Password"
                  minlength="8"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  name="password"
                  required
                />
              </label>
              <p className="validator-hint hidden">
                Must be more than 8 characters, including at least one number,
                at least one lowercase letter, at least one uppercase letter
              </p>
              <button className="btn btn-primary mt-4">Register</button>
              <p className="font-semibold text-center pt-3">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
            <div className="flex">
              <p className="border-b-1 border-gray-600"></p>
              <span className="w-15 text-center ">or</span>
              <p className="border-b-1 border-gray-600"></p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <button
                onClick={handleGoogle}
                className="btn btn-primary  rounded-lg"
              >
                <FaGoogle size={24} />
              </button>
              <button
                onClick={handleGitHub}
                className="btn btn-primary rounded-lg "
              >
                <FaGithub size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
