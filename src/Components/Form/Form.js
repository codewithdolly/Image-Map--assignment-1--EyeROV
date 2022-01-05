import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "8px" }}>Title: </label>
          <TextField id="outlined-basic" size="small" variant="outlined" />
        </div>
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "6px" }}>Coords: </label>
          <TextField id="outlined-basic" size="small" variant="outlined" />
        </div>{" "}
        <div style={{ display: "flex" }}>
          <label style={{ marginRight: "8px" }}>Shape: </label>
          <TextField id="outlined-basic" size="small" variant="outlined" />
        </div>
      </Box>
      <Button variant="contained" endIcon={<SendIcon />}>Send</Button>

    </div>
  );
};

export default Form;
