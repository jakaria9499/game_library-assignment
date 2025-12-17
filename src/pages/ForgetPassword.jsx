import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  const handleForget = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    forgetPassword(email)
      .then(() => {
        setStatus(`successfully sent to ${email},
             please check your inbox.`);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(email);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-base-200 min-h-[500px]">
      <form onSubmit={handleForget} className="join">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="Enter email address"
              required
              name="email"
            />
          </label>
          <div className="validator-hint hidden">
            Enter a valid email address
          </div>
        </div>
        <button type="submit" className="btn btn-neutral join-item">
          Sent
        </button>
      </form>
      <p className="text-sm text-secondary mt-5">{status}</p>
    </div>
  );
};

export default ForgetPassword;
