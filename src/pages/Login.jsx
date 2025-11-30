import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col gap-10">
        <h1 className="text-2xl font-bold">Welcome to Login page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
              <p className="font-semibold text-center pt-3">
                Don't Have An Account ?{" "}
                <Link className="text-secondary" to="/register">
                  Register
                </Link>
              </p>
            </fieldset>
            <div className="flex">
              <p className="border-b-1 border-gray-600"></p>
              <span className="w-15 text-center ">or</span>
              <p className="border-b-1 border-gray-600"></p>
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <button className="btn btn-primary  rounded-lg">
                <FaGoogle size={24} />
              </button>
              <button className="btn btn-primary rounded-lg ">
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
