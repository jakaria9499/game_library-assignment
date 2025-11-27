import React from "react";

const NewsLetter = () => {
  return (
    <div className="h-60 flex flex-col gap-5 items-center justify-center">
      <h1 className="text-lg font-bold">Want To get New Game news Daily?</h1>
      <div className="grid grid-cols-3 gap-3 mx-2">
        <input className="input" type="text" name="name" placeholder="Name" />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <button className="btn btn-primary" type="submit">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
