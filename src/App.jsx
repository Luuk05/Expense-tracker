import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

let App = () => {
  let [userSigendIn, setUserSignedIn] = useState(false);
  const navigate = useNavigate();

  let provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  let signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserSignedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home setUserSignedIn={setUserSignedIn} userSigendIn={userSigendIn} />
        }
      />
      <Route
        path="/login"
        element={<Login signInWithGoogle={signInWithGoogle} />}
      />
    </Routes>
  );

  // if (userSigendIn) {
  //   return (
  //     <>
  //       <Home setUserSignedIn={setUserSignedIn} />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Login signInWithGoogle={signInWithGoogle} />
  //     </>
  //   );
  // }
};

export default App;
