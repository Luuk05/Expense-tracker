import React, { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Home from "./components/Home";

let App = () => {
    let [userSigendIn, setUserSignedIn] = useState(false);

    const provider = new GoogleAuthProvider();

    let signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setUserSignedIn(true);
        }).catch((error) => {
            console.log(error);
        });
    }

    if (userSigendIn) {
        return (
            <>
                <Home setUserSignedIn={setUserSignedIn} />
            </>
            
        )
    } else {
        return (
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                padding={4}
            >
               <Button variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
            </Grid>
            );
    }

    


}

export default App;