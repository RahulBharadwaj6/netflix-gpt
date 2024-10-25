import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateSignIn";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) {
      return;
    }
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocLD2NqitXREh5EHzLrZ1AFHB4_ny51pCmxJBz7qZSHsm_pFS0IuyA=s192-c-mo",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <img src={BACKGROUND_URL} alt="background" className="absolute" />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black my-44 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="fony-bold text-3xl my-4 w-full">
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="name"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700"
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="font-xl py-2 text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-4 my-4 w-full bg-red-700 rounded-lg"
        >
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
