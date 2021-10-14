import { graphql, Link } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";
import { langs } from "../data/languages";

export default function IndexPage({ data }) {
  return (
    <main>
      <Link to={`/${langs.PORTUGUESE}`}>{langs.PORTUGUESE}</Link>
      <Header data={data.allContentfulSocial} locale="en-US" />
      <h2>Work Experience</h2>
      <WorkExperience data={data.allContentfulWorkExperience} locale="en-US" />

      <h2>Education</h2>
      <h3>Degree: System Analysis and Development</h3>
      <h4>Institution: Faculdade de Tecnologia de Sorocaba</h4>
      <p>Graduated August 2018</p>
    </main>
  );
}

export const query = graphql`
  query IndexPageQueryEn {
    allContentfulWorkExperience(
      sort: { fields: endDate, order: DESC }
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          company
          startDate(formatString: "MM/YYYY")
          endDate(formatString: "MM/YYYY")
          jobDescription {
            raw
          }
          jobTitle
        }
      }
    }
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
`;
