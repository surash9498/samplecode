import { Button, Grid } from "@material-ui/core";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import React from "react";
import { Link } from "react-router-dom";
function Cart(props) {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <React.Fragment>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <AddBoxRoundedIcon
                onClick={() => props.onAdd(item)}
                color="secondary"
              ></AddBoxRoundedIcon>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => props.onRemove(item)}
                color="primary"
              ></RemoveCircleOutlineRoundedIcon>
              <DeleteRoundedIcon
                onClick={() => props.onDelete(item)}
              ></DeleteRoundedIcon>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ₹{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">₹{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">₹{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ₹{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>₹{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <Grid item container alignItems="center" justifyContent="center">
                <Grid item container lg={3}>
                  <Button variant="contained" color="secondary">
                    <Link to="/orders">Checkout</Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default Cart;
