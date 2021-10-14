import * as React from "react";
import { graphql, navigate, withPrefix } from "gatsby";

export default function IndexPage(props) {
  const defaultLangKey = props.data.site.siteMetadata.languages.defaultLangKey;
  const homeUrl = withPrefix(`/${defaultLangKey}/`);

  navigate(homeUrl);
  return <main></main>;
}
// ------------------------------------------------------

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
        }
      }
    }
  }
`;
