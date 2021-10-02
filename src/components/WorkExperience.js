import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function WorkExperience() {
  return <StaticQuery query={query} render={(data) => <Job data={data} />} />;
}

const query = graphql`
  query GetAllWorkExperience {
    allContentfulWorkExperience(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          company
          startDate
          endDate
          jobDescription {
            raw
          }
          jobTitle
        }
      }
    }
  }
`;

function Job({ data }) {
  console.log(query, data);
  return (
    <>
      {data.allContentfulWorkExperience.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.jobTitle} - {node.company}
          </h3>
          <p>
            {node.startDate} - {!!node.endDate ? node.endDate : "Current"}
          </p>
          {renderRichText(node.jobDescription)}
        </div>
      ))}
    </>
  );
}
