import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./card.module.css"

export default function Card({ person }) {
  
  return (
    <div className={styles.card}>
      <div>
        
        <GatsbyImage
          image={person.image.childImageSharp.gatsbyImageData}
          alt="Image of Card"
          
          style={{
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
        />
      </div>
      <div className={styles.description}>
        <h4>{person.firstname}</h4>
        <h3>{person.lastname}</h3>
      </div>
    </div>
  )
}
