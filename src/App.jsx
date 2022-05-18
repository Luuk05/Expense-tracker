import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Popup from "./components/Popup";
import Read from "./components/Read";

let App = () => {
  let [editMode, setEditMode] = useState("false");

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Popup editMode={editMode}/>
      <Read changeEditMode={(editMode) => setEditMode(editMode)} />

    </Grid>
  );
};

export default App;
