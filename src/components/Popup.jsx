import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
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

let Popup = ({ open, setOpen, editObject }) => {
  let [name, setName] = useState("");
  let [amount, setAmount] = useState(0);
  let [category, setCategory] = useState("");

  let expensesRef = collection(db, "expenses");

  let createExpense = async () => {
    await addDoc(expensesRef, { 
      name: name, 
      amount: parseFloat(amount), 
      category :category 
    });
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setAmount(0);
    setCategory("");
  };

  console.log(editObject)

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ m: 0, p: 4.5 }}>
          <DialogTitle sx={{ p: 0 }}>Vul hier je kosten in</DialogTitle>
          <FormControl sx={{ my: 1 }}>
            <TextField
              sx={{ my: 1, width: 320 }}
              label="Naam"
              id="name"
              autoComplete="off"
              onChange={(e) => {
                e.target.value =
                  e.target.value.charAt(0).toUpperCase() +
                  e.target.value.slice(1);
                setName(e.target.value);
              }}
            />

            <FormControl sx={{ my: 1 }}>
              <InputLabel htmlFor="amount" sx={{ fontSize: 18 }}>
                Bedrag
              </InputLabel>
              <OutlinedInput
                label="Bedrag"
                id="amount"
                type="number"
                startAdornment={
                  <InputAdornment position="start">€</InputAdornment>
                }
                sx={{ width: 320, fontSize: 18 }}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ my: 1 }}>
              <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Categorie"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="Boodschappen">Boodschappen 🛒</MenuItem>
                <MenuItem value="Uitgaan">Uitgaan 🍻</MenuItem>
                <MenuItem value="Hypotheeklasten of huur">
                  Hypotheeklasten of huur 💵
                </MenuItem>
                <MenuItem value="Kosten voor energie, gas en water">
                  Kosten voor energie, gas en water ⚡
                </MenuItem>
                <MenuItem value="Kosten voor mijn auto">
                  Kosten voor mijn auto 🚗
                </MenuItem>
                <MenuItem value="Kosten voor internet en tv">
                  Kosten voor internet en tv 📺
                </MenuItem>
                <MenuItem value="Belastingen">Belastingen 😔</MenuItem>
                <MenuItem value="Overig">Overig 📅</MenuItem>
              </Select>
            </FormControl>
          </FormControl>

          <DialogActions sx={{ p: 0 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                createExpense();
                handleClose();
              }}
              disabled={!name || !amount || !category}
              variant="contained"
              sx={{ width: 140 }}
            >
              Voeg toe
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Popup;
