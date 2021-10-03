import { langs } from "../data/languages";
import { Link, graphql } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import WorkExperience from "../components/WorkExperience";

export default function IndexPage({ data }) {
  return (
    <main>
      <Link to={`/${langs.ENGLISH}`}>{langs.ENGLISH}</Link>
      <Header data={data.allContentfulSocial} />
      <h2>Experiência Profissional</h2>
      <WorkExperience data={data.allContentfulWorkExperience} />

      <h2>Formação</h2>
      <h3>
        Tecnólogo em Análise e Desenvolvimento de Sistemas pela Faculdade de
        Tecnologia de Sorocaba (FATEC)
      </h3>
      <h4>Graduação em Agosto de 2018</h4>
    </main>
  );
}

export const query = graphql`
  query IndexPageQueryPt {
    allContentfulWorkExperience(
      sort: { fields: endDate, order: DESC }
      filter: { node_locale: { eq: "pt-BR" } }
    ) {
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
    allContentfulSocial(filter: { node_locale: { eq: "pt-BR" } }) {
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
