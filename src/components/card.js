
import React, { useContext} from 'react';
import { GlobalDispachContext } from "../context/GlobalContextProvider";
import * as styles from "./card.module.css";

export default function Card(props) {
  const dispach = useContext(GlobalDispachContext);

  let data = props.data.node.frontmatter;

  const cardClicked = () => {
    dispach({ type: "ADD_PRODUCT", value: data });
  };
  return (
    <div
      className={styles.card}
      onClick={cardClicked}
      onKeyDown={cardClicked}
      role="presentation"
    >
      <div>
        <img src={data.image} width="100%" alt="food"></img>
      </div>
      <div className={styles.description}>
        <h1>{data.title}</h1>
        <h2>{data.category}</h2>
        <h3>{data.price}</h3>
      </div>
    </div>
  );
}
