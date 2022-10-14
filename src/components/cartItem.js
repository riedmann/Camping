import React from 'react'
import * as styles from './cartItem.module.css'

export default function CartItem({product}) {
  return (
    <div className={styles.item}>
        <p>{product.name}</p>
        <p>Preis:{product.price}</p>
        <p>Menge:{product.amount}</p>
        <p>Summe:{product.amount * product.price}</p>
    </div>
  )
}
