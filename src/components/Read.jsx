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
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

let Read = () => {
  let [expenses, setExpenses] = useState([]);
  // let expensesRef = collection(db, "expenses")

  // useEffect(() => {
  //   const getExpenses = async () => {
  //     const data = await getDocs(expensesRef);
  //     setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   }

  //   getExpenses()
  // }, [])

  return (
    <>
      <h1>Expenses</h1>
      <Grid
        wrap="wrap"
        sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "600px",
            py: 3.5,
            px: 4.5,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Grid sx={{ display: "flex" }}>
            <Grid sx={{ display: "flex", alignItems: "center", pr: 2 }}>
              <Avatar>W</Avatar>
            </Grid>
            <Grid>
              <Typography variant="h6">Headphones</Typography>
              <Typography sx={{ color: "#9e9e9e" }} variant="body2">
                18 May 2022
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography variant="body1">-€65,99</Typography>
          </Grid>
        </Grid>
      </Grid>
      {expenses.map((expense, index) => {
        return (
          <div>
            <h1>Expense name: {expense.name}Brood</h1>
            <h1>Expense price: {expense.price}3,25</h1>
            <h1>Expense category: {expense.category}Boodschappen</h1>
          </div>
        );
      })}
    </>
  );
};

export default Read;
