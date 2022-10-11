import { GatsbyImage } from "gatsby-plugin-image"
import React, { useContext } from "react"
import { GlobalDispachContext } from "../context/GlobalContextProvider";
import * as styles from "./card.module.css"


export default function Card(props) {
  //const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispachContext);
 
  let data = props.data.node.frontmatter;
  const cardClicked = ()=>{
    dispatch({type:"ADD_PRODUCT", value:data})
  }
  return (
    <div className={styles.card} onClick={cardClicked} onKeyDown={cardClicked}  role='presentation'>
      <div>
        
        <GatsbyImage
          image={data.image.childImageSharp.gatsbyImageData}
          alt="Image of Card"
          
          style={{
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
            
          }}
        />
      </div>
      <div className={styles.description}>
        <h1>{data.title}</h1>
        <h2>{data.category}</h2>
        <h3>{data.price}</h3>
      </div>
    </div>
  )
}
