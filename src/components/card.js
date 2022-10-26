
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
      <div className={styles.imageContainer} style={{backgroundImage:"url('"+ data.image +"')", backgroundSize:"cover"}}>
        
      </div>
      <div className={styles.description}>
        <h2>{data.name}</h2>
        <h3>{data.category}</h3>
        <h4>{data.price} €</h4>
      </div>
    </div>
  );
}
