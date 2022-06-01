import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Home from "./components/Home";
import Login from "./components/Login";

let App = () => {
  let [userSigendIn, setUserSignedIn] = useState(false);

  let provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  let signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (userSigendIn) {
    return (
      <>
        <Home setUserSignedIn={setUserSignedIn} />
      </>
    );
  } else {
    return (
      <>
        <Login signInWithGoogle={signInWithGoogle} />
      </>
    );
  }
};

export default App;
