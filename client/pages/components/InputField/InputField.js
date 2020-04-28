import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      background: "white",
    },
  },
}));

export default function InputField({
  label,
  type,
  className,
  onChange,
  name,
  onKeyPress,
  width,
}) {
  const classes = useStyles();

  return (
    <div className={className}>
      <div className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          type={type}
          onChange={onChange}
          style={{ width: width }}
          name={name}
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
}

// changed input field to a div, no longer a form and can be used as part of the other form
// onChange is not working
// need to figure that out
