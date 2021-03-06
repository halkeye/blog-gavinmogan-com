import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { toPostInfo } from '../postUtils.js';
import ItemBlock from '../components/ItemBlock/ItemBlock.jsx';
import SubHeader from '../components/SubHeader/SubHeader.jsx';
import Layout from '../layouts/index.jsx';
import './presentations.scss';

const PresentationList = ({ nodes }) => (
  <div className="md-grid">
    {nodes.map(edge => (
      <ItemBlock
        key={edge.id}
        {...edge}
        html={edge.html}
        urlPrefix="/presentations/"
      />
    ))}
  </div>
);

const PresentationsPage = ({ data, location }) => {
  const nodes = data.allMarkdownRemark.edges.map(toPostInfo);
  return (
    <Layout location={location} title="Presentations">
      <div className="presentations-container">
        <Helmet>
          <title>Presentations</title>
        </Helmet>
        <SubHeader title="Presentations" />

        <PresentationList nodes={nodes} />
      </div>
    </Layout>
  );
};

export default PresentationsPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PresentationsPage {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { sourceName: { eq: "presentation" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
            tags
            category
          }
          id
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxHeight: 405, cropFocus: ENTROPY) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            link
            links {
              type
              url
            }
            attachments {
              absolutePath
              publicURL
            }
          }
        }
      }
    }
  }
`;
