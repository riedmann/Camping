import { graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../components/card";
import CartList from "../components/cartlist";
import Layout from "../components/layout";
import * as styles from "./products.module.css";

export default function Products({ data }) {
  const [search, setSearch] = useState("");
  const prods = data.allMarkdownRemark.edges;

  var filteredProds = prods.filter(function (el) {
    return (
      el.node.frontmatter.name.search(search) >= 0 ||
      el.node.frontmatter.category.search(search) >= 0 ||
      el.node.frontmatter.title.search(search) >= 0
    );
  });

  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  let id = 0;
  return (
    <Layout>
      <div className={styles.filter}>
        <input
          style={{ color: "black" }}
          type="text"
          value={search}
          onChange={onChangeHandler}
        ></input>
      </div>
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
