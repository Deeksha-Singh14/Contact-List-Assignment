import { React, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";


const useStyles = makeStyles({
  main: {
    background: "#dfe6e9",
    padding: 20,
    height: "auto",
  },
});
export default function Login(props) {
    
  const classes = useStyles(props);
  const [emailid, setEmailId] = useState("");
  const [password, setPassword] = useState("");
      var navigate = useNavigate();

  const handleLogin =()=>{
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(emailid)) {
     localStorage.setItem("email", emailid);
     localStorage.setItem("password", password);
       navigate("/home");
    } else {
      alert("invalid email")
    }
 
  

  }
  

  return (
    <div >
      <div
        style={{
          height: 550,
          width: "100%",
          borderRadius: 10,
          background: "white",
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
           
            md={8}
            style={{
             
              padding:30
            }}
          >
            <img
              
              src="signin.jpeg"
              style={{ height: 450, width: "100%", borderRadius: 10 }}
            />
          </Grid>
          <Grid
            item
            md={4}
            style={{
              
              padding:30
            }}
          >
            <Grid container spacing={1}>
              <div
                style={{
                  height: 420,
                  background: "#fff",
                  border: "1px solid grey",
                  borderRadius: 10,
                  width: "100%",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon style={{ height: 60, width: 60 }} />
                </div>

                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <div style={{ fontSize: 30, fontWeight: "bold" }}>
                      Sign In
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: 15 }}>
                    <TextField
                      fullWidth
                      type="email"
                      size="small"
                      variant="outlined"
                      label=" Email id"
                      onChange={(event) => setEmailId(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: 10 }}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label=" Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: 10 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={() => handleLogin()}
                      style={{ background: "black", fontWeight: "bold" }}
                      endIcon={<SendIcon />}
                    >
                      SEND{" "}
                    </Button>
                  </Grid>

                  <Grid item xs={12} style={{ marginTop: 15 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 13,
                      }}
                    >
                      <div>By continuing you agree to our </div>&nbsp;
                      <div style={{ color: "red" }}>Terms of service</div>{" "}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 13,
                      }}
                    >
                      {" "}
                      <div>and </div>&nbsp;
                      <div style={{ color: "red" }}>
                        {" "}
                        Privacy & Legal Policy.
                      </div>{" "}
                    </div>
                    
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

