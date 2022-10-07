import React from 'react'
import * as styles from "./fullpage.module.css"
import "../styles/global.css"

export default function Fullpage({children}) {
  return (
    <div className={styles.fullpage}>
        {children}
    </div>
  )
}
