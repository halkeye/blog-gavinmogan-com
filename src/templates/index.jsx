import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layouts/index.jsx';
import PostListing from '../components/PostListing/PostListing.jsx';
import Pagination from '../components/Pagination/Pagination.jsx';
import SEO from '../components/SEO/SEO.jsx';

class IndexPage extends React.Component {
  render () {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const { index, paginatedPagesCount } = this.props.pageContext;
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <SEO />
          <PostListing postEdges={postEdges} />
          <Pagination index={index + 1} pageCount={paginatedPagesCount} />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { fields: { sourceName: { eq: "blog" } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          timeToRead
          fields {
            slug
            category
          }
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 300, cropFocus: ENTROPY) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
