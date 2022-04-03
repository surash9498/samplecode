import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SimpleAppBar from "./Common/Appbar";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Orders from "./Components/Orders";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItems.length != 0)
      localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem("cart"));
    return res.length > 0 ? setCartItems(res) : null;
  }, []);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      let temp = [];
      cartItems.map((x) => {
        if (x.id != product.id) {
          temp.push(x);
        }
      });
      setCartItems(temp);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <React.Fragment>
      <SimpleAppBar></SimpleAppBar>
      <Switch>
        <Route
          path={"/home"}
          render={() => <Home onAdd={onAdd}></Home>}
        ></Route>
        <Route
          path={"/cart"}
          render={() => (
            <Cart
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            ></Cart>
          )}
        ></Route>
        <Route
          path={"/orders"}
          component={() => <Orders cartItems={cartItems}></Orders>}
        ></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
