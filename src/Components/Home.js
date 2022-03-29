import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import Main from "./Main";

function Home(props) {
  const { products } = data;
  return (
    <React.Fragment>
      <div className="App">
        <div className="row">
          <Main products={products} onAdd={props.onAdd}></Main>
        </div>
      </div>
      <br />
      <br />
      <Grid item container justifyContent="center">
        <Grid item container lg={2} justifyContent="center" alignItems="center">
          <Button variant="contained" color="secondary" size="small">
            <Link to="/cart">Proceed to Cart</Link>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Home;
