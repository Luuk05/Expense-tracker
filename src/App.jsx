import React, { useEffect, useState } from "react";
import {db} from "./firebaseConfig"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme.js"
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';





let App = () => {


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <ThemeProvider theme={theme}>
      
      </ThemeProvider>
    </Grid>
  );
};


export default App;
