import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function ContentfulMock() {
  return (
    <StaticQuery
      query={graphql`
    query GetAllArticles {
      allContentfulArticle {
        edges {
          node {
            id
            title
            author {
              firstname
              lastname
            }
            body {
              raw
            }
          }
        }
      }
    }
  `}
      render={(data) =>
        data.allContentfulArticle.edges.map((edge) => (
          <div key={edge.node.id}>
            <h2>{edge.node.title}</h2>
            <h3>
              Created By: {edge.node.author.firstname}{" "}
              {edge.node.author.lastname}
            </h3>
            {renderRichText(edge.node.body)}
          </div>
        ))
      }
    />
  );
}
