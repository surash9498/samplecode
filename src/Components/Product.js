import { Button } from "@material-ui/core";
import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3
        style={{
          textTransform: "capitalize",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {product.name}
      </h3>
      <div
        style={{
          textTransform: "capitalize",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <b>₹{product.price}</b>
      </div>
      <div>
        <Button
          onClick={() => onAdd(product)}
          variant="contained"
          color="secondary"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
