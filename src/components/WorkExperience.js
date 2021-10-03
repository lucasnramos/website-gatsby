import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export default function WorkExperience({ data, locale }) {
  const currentJobStringMessage = () => {
    if (locale === "pt-BR") {
      return "Cargo Atual";
    } else {
      return "Current";
    }
  };
  return (
    <>
      {data.edges.map(({ node }) => (
        <div key={node.id} style={{ marginTop: "40px" }}>
          <h3>
            {node.jobTitle} - {node.company}
          </h3>
          <p>
            {node.startDate} -{" "}
            {!!node.endDate ? node.endDate : currentJobStringMessage()}
          </p>
          {renderRichText(node.jobDescription)}
        </div>
      ))}
    </>
  );
}
