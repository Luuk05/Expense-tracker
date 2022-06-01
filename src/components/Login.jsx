import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

let Login = ({ signInWithGoogle }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
    >
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Grid>
  );
};

export default Login;
