import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function WorkExperience({ data }) {
  return (
    <>
      {data.edges.map(({ node }) => (
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
