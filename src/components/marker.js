import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";

import * as styles from "./marker.module.css";

export default function Marker() {
  const state = useContext(GlobalStateContext);

  const getSumOfProducts = () => {
    let sum = 0;
    state.products.forEach((element) => {
      sum += element.amount;
    });
    return sum;
  };
  return (
    <div className={styles.marker}>
      <div className={styles.title}>Warenkorb</div>
      <h3> {getSumOfProducts()}</h3>
     
    </div>
  );
}
