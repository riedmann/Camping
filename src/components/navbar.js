import { Link } from "gatsby"
import React, {  } from "react"
import * as styles from "./navbar.module.css"


export default function Navbar() {
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.bar}>
        <ul>
          <li>
            <Link to="/" activeClassName={styles.selected}>Home</Link>
          </li>
          <li>
            <Link to="/products" activeClassName={styles.selected}>Products</Link>
          </li>

          <li>
            <Link to="/cart" activeClassName={styles.selected}>Warenkorb</Link>
          </li>
          <li>
            <Link to="/form" activeClassName={styles.selected}>Fromular</Link>
          </li>
          <li>
            <Link to="/about" activeClassName={styles.selected}>Info</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
