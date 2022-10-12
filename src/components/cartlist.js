import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";

export default function CartList() {
  const state = useContext(GlobalStateContext);
  console.log(state);
  let hasData = true;
  if (!state) {
    hasData = false;
  }
  return (
    <div>
      {hasData ? (
        state.products.map((product) => (
          <div>
            <h2>{product.name}</h2>
            <h4>{product.price}</h4>
          </div>
        ))
      ) : (
        <div>nothing</div>
      )}
    </div>
  );
}
