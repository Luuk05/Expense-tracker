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
import { SvgIcon } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Popup from "./Popup";

let Read = ({ setOpen, setEditObject }) => {
  let [expenses, setExpenses] = useState([]);

  let expensesRef = collection(db, "expenses");

  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesRef);
      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExpenses();
  }, []);

  return (
    <>
      <h1>Jouw uitgaven</h1>
      <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "18px" }}>
        {expenses.map((expense, key) => {
          return (
            <Grid
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "600px",
                py: 2.5,
                px: 4.5,
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Grid sx={{ display: "flex", alignItems: "center", pr: 2 }}>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid>
                  <Typography variant="h6">{expense.name}</Typography>
                  <Typography sx={{ color: "#9e9e9e" }} variant="body2">
                    {expense.category}
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex" }}>
                <Typography variant="body1">
                  &minus; €{expense.amount}
                  {""}
                </Typography>
                <ModeEditOutlineOutlinedIcon
                  sx={{ height: 20, width: 20, ml: 4, cursor: "pointer" }}
                  onClick={() => {
                    setOpen(true);
                    setEditObject({
                      id: expense.id,
                      name: expense.name,
                      amount: expense.amount,
                      category: expense.category,
                    });
                  }}
                />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Read;
