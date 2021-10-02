import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import PropTypes from "prop-types";

export default function ContentfulMock(props) {
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
      render={(data) => <HeroArticle data={data} {...props} />}
    />
  );
}

function HeroArticle({ data }) {
  return data.allContentfulArticle.edges.map((edge) => (
    <div key={edge.node.id}>
      <h2>{edge.node.title}</h2>
      <h3>
        Created By: {edge.node.author.firstname} {edge.node.author.lastname}
      </h3>
      {renderRichText(edge.node.body)}
    </div>
  ));
}

HeroArticle.propTypes = {
  data: PropTypes.shape({
    allContentfulArticle: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            body: PropTypes.any,
            author: PropTypes.shape({
              firstname: PropTypes.string,
              lastname: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
};
