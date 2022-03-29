import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { HistoryRounded } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#f50057",
    marginLeft: "2px",
    paddingLeft: "1vw",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "red",
    },
  },
}));

export default function SimpleAppBar() {
  const classes = useStyles();
  // let history = useHistory();

  const preventDefault = (event) => {
    console.log(event.target.text);
    // history.push(`/${event.target.text}`);
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Grid
          xs={2}
          direction="row"
          container
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Typography variant="h6" className={classes.title}>
            <Link to="/home" className={classes.link}>
              Home
            </Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link to="/cart" className={classes.link}>
              Cart
            </Link>
          </Typography>

          <Typography variant="h6" className={classes.title}>
            <Link to="/orders" className={classes.link}>
              My Orders
            </Link>
          </Typography>
        </Grid>
      </AppBar>
    </div>
  );
}
