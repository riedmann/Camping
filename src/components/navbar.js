import { Link } from "gatsby";
import React from "react";
import * as styles from "./navbar.module.css";
import "../styles/menu.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <Link to="/products" activeClassName={styles.selected}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/cart" activeClassName={styles.selected}>
              Warenkorb
            </Link>
          </li>
        </ul>
        <h1 class="logo">Camping</h1>
      </div>
    </nav>
    // <nav className={styles.navbar}>
    //   <div className={styles.hamburger}>
    //     <div className={styles.row}>
    //       <input type="checkbox" id="hamburg" className={styles.input}/>
    //       <label for="hamburg" className={styles.hamburg}>
    //         <span className={styles.line}></span>
    //         <span className={styles.line}></span>
    //         <span className={styles.line}></span>
    //       </label>
    //     </div>
    //   </div>
    //   <div className={styles.bar}>
    //     <ul>
    // <li>
    //   <Link to="/" activeClassName={styles.selected}>
    //     Home
    //   </Link>
    // </li>
    // <li>
    //   <Link to="/products" activeClassName={styles.selected}>
    //     Products
    //   </Link>
    // </li>

    // <li>
    //   <Link to="/cart" activeClassName={styles.selected}>
    //     Warenkorb
    //   </Link>
    // </li>
    // <li>
    //   <Link to="/form" activeClassName={styles.selected}>
    //     Fromular
    //   </Link>
    // </li>
    // <li>
    //   <Link to="/about" activeClassName={styles.selected}>
    //     Info
    //   </Link>
    // </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
