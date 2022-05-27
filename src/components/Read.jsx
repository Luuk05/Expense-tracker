import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc, query, orderBy, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { blue } from "@mui/material/colors";

let Read = ({ setOpen, setEditObject, change, setChange }) => {
  let [expenses, setExpenses] = useState([]);

  let userId = getAuth().currentUser.uid;

  const removeExpense = async (documentId) => {
    setChange(true);
    await deleteDoc(doc(db, "expenses", documentId));
  };
  
  useEffect(() => {
    const getExpenses = async () => {
      let q = query(collection(db, "expenses"), where("userId", "==", userId));
      let data = await getDocs(q);
      setExpenses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setChange(false);
    };
    getExpenses();
    
  }, [change]);

  

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
                  <Avatar sx={{ bgcolor: blue[700], p: 0.2 }}>{expense.category.split(" ")[expense.category.split(" ").length -1]}</Avatar>
                </Grid>
                <Grid>
                  <Typography variant="h6">{expense.name}</Typography>
                  <Typography sx={{ color: "#9e9e9e" }} variant="body2">
                    {  expense.category.slice(0, expense.category.length - 2) }
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
                      documentId: expense.documentId,
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
                    removeExpense(expense.documentId);
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
