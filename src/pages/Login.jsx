import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn, setUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col gap-10">
        <h1 className="text-2xl font-bold">Welcome to Login page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <Link to="/forgetPassword" className="link link-hover">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Login
              </button>
              <p className="font-semibold text-center pt-3">
                Don't Have An Account ?{" "}
                <Link className="text-secondary" to="/register">
                  Register
                </Link>
              </p>
            </form>
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
              <button className="btn btn-primary rounded-lg">
                <FaFacebook size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
