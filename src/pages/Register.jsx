import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-full flex-col gap-10">
        <h1 className="text-2xl font-bold">Welcome to Register page</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Full Name" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Photo URL</label>
              <input type="url" className="input" placeholder=" Input Photo URL" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <button className="btn btn-primary mt-4">Register</button>
              <p className="font-semibold text-center pt-3">
                Allready Have An Account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
