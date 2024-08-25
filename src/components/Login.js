import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
        alt="background"
        className="absolute"
      />
      <form className="absolute w-3/12 p-12 bg-black my-44 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="fony-bold text-3xl my-4 w-full">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="name"
            placeholder="Full name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-4 w-full bg-red-700 rounded-lg">
          {isSignIn ? "Sign in" : "Sign up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up here"
            : "Already a user? Sign in here"}
        </p>
      </form>
    </div>
  );
};

export default Login;
