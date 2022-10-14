import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import CartItem from "./cartItem";

export default function CartList() {
  const state = useContext(GlobalStateContext);
  console.log(state);
  let hasData = true;
  if (!state) {
    hasData = false;
  }

  const getSumOfProducts = () => {
    let sum = 0;
    state.products.forEach((element) => {
      sum += element.price * element.amount;
    });
    return sum;
  };
  return (
    <div>
      {hasData ? (
        state.products.map((product) => (
          <CartItem product={product}/>
        ))
      ) : (
        <div>nothing</div>
      )}
      <h3>Summe: {getSumOfProducts()}</h3>
    </div>
  );
}
