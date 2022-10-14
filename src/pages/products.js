import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card";
import Layout from "../components/layout";
import * as styles from "./products.module.css";

export default function Products({ data }) {
  const prods = data.allMarkdownRemark.edges;
  let id = 0;
  return (
    <Layout>
      
        <h1>PRODUCTS</h1>
        <div className={styles.cards}>
          {prods.map((product) => {
            id++;
            return <Card data={product} key={id} />;
          })}
        </div>
   
    </Layout>
  );
}

export const query = graphql`
  query products {
    allMarkdownRemark(
      filter: { frontmatter: {}, fileAbsolutePath: { regex: "/products/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            name
            price
            category
            image
          }
        }
      }
    }
  }
`;
