import React from "react";
import Navbar from "./navbar";
import "../styles/global.css";
import * as styles from "./layout.module.css";
import GlobalContextProvider from "../context/GlobalContextProvider";

export default function Layout({ children }) {
  return (
    <GlobalContextProvider>
      <div className={styles.layout}>
        <Navbar />
        <div className="content">{children}</div>
        <footer>
          <p>Copyright ran</p>
        </footer>
      </div>
    </GlobalContextProvider>
  );
}
