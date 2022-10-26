import { graphql } from "gatsby";
import React, { useState } from "react";
import Card from "../components/card";
import Layout from "../components/layout";
import * as styles from "./products.module.css";

export default function Products({ data }) {
  const [search, setSearch] = useState("Creme");
  const prods = data.allMarkdownRemark.edges;

  var filteredProds = prods.filter(function (el) {
    let res = el.node.frontmatter.name.search(search);

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
      <div>
        <input
          style={{ color: "black" }}
          type="text"
          value={search}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div className={styles.cards}>
        {filteredProds.map((product) => {
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
