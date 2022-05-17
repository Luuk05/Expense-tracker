import React, { useEffect, useState } from "react";
import {db} from "../firebaseConfig"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js"
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from '@mui/material/TextField';
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




let Write = () => {
  let [name, setName] = useState("");
  let [amount, setAmount] = useState(0);
  let [category, setCategory] = useState("");

  let expensesRef = collection(db, "expenses")

  let createExpense = async () => {
    await addDoc(expensesRef, {name, amount, category})
  }


  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <ThemeProvider theme={theme}>
        <FormControl sx={{ my: 1}} >
          <h2>Naam en bedrag expense</h2>
          <TextField 
            sx={{ my: 1, width: 320 }} 
            label="Naam" 
            id="name"
            onChange={ (e) => setName(e.target.value) }
          />
          
          <FormControl sx={{ my: 1}} >
            <InputLabel htmlFor="amount" sx={{ fontSize: 18 }}>Bedrag</InputLabel>
            <OutlinedInput
              label="Bedrag"
              id="amount"
              type="number"
              startAdornment={<InputAdornment position="start">€</InputAdornment>}
              sx={{ width: 320, fontSize: 18 }}
              onChange={ (e) => setAmount(e.target.value) }
            />
          </FormControl>   
          <FormControl sx={{ my: 1}} >
            <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                label="Categorie" 
                id="category"
                value={category}
                onChange={ (e) => setCategory(e.target.value) }
              >
              <MenuItem value="Boodschappen">Boodschappen 🛒</MenuItem>
              <MenuItem value="Uitgaan">Uitgaan 🍻</MenuItem>
              <MenuItem value="Hypotheeklasten of huur">Hypotheeklasten of huur 💵</MenuItem>
              <MenuItem value="Kosten voor energie, gas en water">Kosten voor energie, gas en water ⚡</MenuItem>
              <MenuItem value="Kosten voor mijn auto">Kosten voor mijn auto 🚗</MenuItem>
              <MenuItem value="Kosten voor internet en tv">Kosten voor internet en tv 📺</MenuItem>
              <MenuItem value="Belastingen">Belastingen 😔</MenuItem>
              <MenuItem value="Overig">Overig 📅</MenuItem>
            </Select>
          </FormControl>
          <Button onClick={createExpense} disabled={!name || !amount || !category} variant="contained" sx={{ mx: "auto", my: 1, width: 160 }}>
            Voeg toe
          </Button>
        </FormControl>
          
      </ThemeProvider>
    </Grid>
  );
};


export default Write;
