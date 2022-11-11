import { graphql } from "gatsby";
import React, { useContext, useState } from "react";
import Card from "../components/card";
import Layout from "../components/layout";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import * as styles from "./products.module.css";

export default function Products({ data }) {
  
  const state = useContext(GlobalStateContext);

  const [search, setSearch] = useState("");
  const prods = data.allMarkdownRemark.edges;

  var filteredProds = prods.filter(function (el) {
    return (
      el.node.frontmatter.name.search(state.search) >= 0 ||
      el.node.frontmatter.category.search(state.search) >= 0 ||
      el.node.frontmatter.title.search(state.search) >= 0
    );
  });



  let id = 0;
  return (
    <Layout>
    
      
      <div className={styles.prods}>
        <div className={styles.cards}>
          {filteredProds.map((product) => {
            id++;
            return <Card data={product} key={id} />;
          })}
        </div>
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
            description
            image
          }
        }
      }
    }
  }
`;
