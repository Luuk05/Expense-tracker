import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Popup from "./components/Popup";
import Read from "./components/Read";

let App = () => {
  let [open, setOpen] = useState(false);
  let [editObject, setEditObject] = useState({});
  let [change, setChange] = useState(false);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
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
        setChange={(change) => setChange(change)} />
      <Read
        setOpen={(open) => setOpen(open)}
        setEditObject={(editObject) => setEditObject(editObject)}
        change={change}
        setChange={(change) => setChange(change)}
      />
    </Grid>
  );
};

export default App;
