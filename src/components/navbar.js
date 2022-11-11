import { Link } from "gatsby";
import React, { useContext } from "react";
import * as styles from "./navbar.module.css";
import "../styles/menu.css";
import Marker from "./marker";
import { GlobalDispachContext } from "../context/GlobalContextProvider";

export default function Navbar() {
  const dispach = useContext(GlobalDispachContext);
  const changeSearch = (event) => {
    dispach({ type: "CHANGE_SEARCH", value: event.target.value });
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLine}>
        <div>
          <Link to="/">
            <img src="./images/logo.svg" />
          </Link>
        </div>
        <div className={styles.text}>
          Jetzt <span className={styles.bold}>bestellen</span>, später{" "}
          <span className={styles.bold}>abholen</span>
        </div>
      </div>
      <div className={styles.navbarLine1}>
        <input type="text" onChange={changeSearch} placeholder="Suche" />
        <div>eins zwei drei</div>
        <Marker />
      </div>
    </div>
  );
}
