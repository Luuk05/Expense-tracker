import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styled, { createGlobalStyle } from "styled-components";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";




const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "capitalize",
      fontSize: 16,
    },
  },
});




// let App = () => {
//   let [value, setValue] = useState();

//   return (
//     <Grid
//       container
//       direction="column"
//       alignItems="center"
//       justifyContent="center"
//     >
//       <ThemeProvider theme={theme}>
//         <h1>Bedrag</h1>
//         <FormControl sx={{ m: 1 }}>
//           <InputLabel htmlFor="amount">Amount</InputLabel>
//           <OutlinedInput
//             id="amount"
//             type="number"
//             startAdornment={<InputAdornment position="start">€</InputAdornment>}
//             label="Amount"
//             onChange={(e) => setValue(e.target.value)}
//           />
//           <Button variant="contained" disabled={!value}>
//             Voeg toe
//           </Button>
//         </FormControl>
//         <h1>Categorie</h1>
//       </ThemeProvider>
//     </Grid>
//   );
// };

let App = () => {
  let [users, setUsers] = useState([]);

  return (
    <h1> hello </h1>
  );
}

export default App;
