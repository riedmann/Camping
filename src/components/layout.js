import React from "react";
import Navbar from "./navbar";
import Marker from "./marker";
import "../styles/global.css";
import * as styles from "./layout.module.css";


export default function Layout({ children }) {
  return (
    
      <div className={styles.layout}>
        <Navbar />
        <Marker/>
        <div className={styles.content}>{children}</div>
        <footer>
          <p>Copyright ran</p>
        </footer>
      </div>
  
  );
}
