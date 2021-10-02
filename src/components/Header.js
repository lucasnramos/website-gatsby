import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <>
      <h1>Lucas Nogueira Ramos</h1>
      <StaticQuery
        query={graphql`
          query GetSocials {
            allContentfulSocial(filter: { node_locale: { eq: "en-US" } }) {
              edges {
                node {
                  id
                  label
                  href
                }
              }
            }
          }
        `}
        render={(data) => <Social data={data} {...props} />}
      />
    </>
  );
}

function Social({ data }) {
  return (
    <p>
      {data.allContentfulSocial.edges.map((edge,index) => (
        <span key={edge.node.id}>
          {index > 0 ? " | ":""}
          <a href={edge.node.href} target="_blank" rel="noreferrer">
            {edge.node.label}
          </a>
        </span>
      ))}
    </p>
  );
}

//Social.propTypes = {
//  data:PropTypes.shape({
//    allContentfulSocial: PropTypes.shape({
//      edges: PropTypes.arrayOf({
//          node: PropTypes.shape({
//            id: PropTypes.string,
//            href: PropTypes.string,
//            label: PropTypes.string,
//          }),
//      })
//    })
//  })
//}
