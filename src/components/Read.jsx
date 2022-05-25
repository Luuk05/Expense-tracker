import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

let Read = ({ setOpen, setEditObject }) => {
  let [expenses, setExpenses] = useState([]);

  let expensesRef = collection(db, "expenses");

  useEffect(() => {
    const getExpenses = async () => {
      const data = await getDocs(expensesRef);
      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExpenses();
  }, [expenses]);

  const removeExpense = async (documentId) => {
    await deleteDoc(doc(db, "expenses", documentId));
  };

  return (
    <>
      <Typography variant="h1" sx={{ my: 4 }}>
        Jouw uitgaven
      </Typography>
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
                  <Avatar sx={{ bgcolor: blue[700], p: 0.2 }}>📅</Avatar>
                </Grid>
                <Grid>
                  <Typography variant="h6">{expense.name}</Typography>
                  <Typography sx={{ color: "#9e9e9e" }} variant="body2">
                    {expense.category}
                  </Typography>
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex" }}>
                <Typography variant="body1">- €{expense.amount}</Typography>
                <ModeEditOutlineOutlinedIcon
                  sx={{
                    height: 20,
                    width: 20,
                    ml: 4,
                    mt: 0.3,
                    cursor: "pointer",
                  }}
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
                <ClearIcon
                  sx={{
                    height: 22,
                    width: 22,
                    ml: 2,
                    mt: 0.3,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    removeExpense(expense.id);
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
