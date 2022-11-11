import React, { useContext } from "react";
import { GlobalDispachContext } from "../context/GlobalContextProvider";
import * as styles from "./card.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function Card(props) {
  const dispach = useContext(GlobalDispachContext);

  let data = props.data.node.frontmatter;

  const cardClicked = () => {
    dispach({ type: "ADD_PRODUCT", value: data });
  };
  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: "url('" + data.image + "')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={styles.description}>
        <div className={styles.info}>
          <div>
            <h2>{data.category}</h2>
            <h3 className={styles.marginTop}>{data.name}</h3>‚  
          </div>

          <div className={styles.priceCart}>
            <div>{data.price} €</div>
            <div className={styles.icon} onClick={cardClicked}>
              <BsFillCartPlusFill
                onMouseOver={({ target }) => (target.style.color = "grey")}
                onMouseOut={({ target }) => (target.style.color = "black")}
              />
            </div>
          </div>
          {/* <p className={styles.detail}>{data.description}</p> */}
        </div>
      </div>
    </div>
  );
}
