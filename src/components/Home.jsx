import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Navigate } from "react-router-dom";

import Popup from "./Popup";
import Read from "./Read";

let Home = ({ userSigendIn, setUserSignedIn }) => {
  let [open, setOpen] = useState(false);
  let [editObject, setEditObject] = useState({});
  let [change, setChange] = useState(false);

  let logOut = () => {
    const auth = getAuth();
    signOut(auth);
    setUserSignedIn(false);
  };

  if (!userSigendIn) {
    return <Navigate to="/login" />;
  } else {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={4}
      >
        <Button
          sx={{ mb: 3 }}
          color="error"
          variant="contained"
          onClick={logOut}
        >
          Log Out
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setEditObject({});
            setOpen(true);
          }}
        >
          Voeg toe
        </Button>
        <Popup
          open={open}
          setOpen={setOpen}
          editObject={editObject}
          setChange={(change) => setChange(change)}
        />
        <Read
          setOpen={(open) => setOpen(open)}
          setEditObject={(editObject) => setEditObject(editObject)}
          change={change}
          setChange={(change) => setChange(change)}
        />
      </Grid>
    );
  }
};

export default Home;
