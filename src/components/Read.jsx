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



let Read = () => {
  let [expenses, setExpenses] = useState([]);
  let expensesRef = collection(db, "expenses")

  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesRef);
      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getExpenses()
  }, [])

  return (
    <> 
      {expenses.map((expense, index) => { 
        return (
          <div>
            <h1>Expense name: {expense.name}</h1>
            <h1>Expense price: {expense.price}</h1>
            <h1>Expense category: {expense.category}</h1>
          </div>
          );
      })} 
    </>
  );
}

export default Read;
