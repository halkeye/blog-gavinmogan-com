import React from "react";

import Helmet from "react-helmet";
import Link from "gatsby-link";
import { Card, CardText, CardActions } from "react-md";
import ItemBlockLinks from "../components/ItemBlockLinks/ItemBlockLinks";
import PostTags from "../components/PostTags/PostTags";
import PostCover from "../components/PostCover/PostCover";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.scss";

export default class PostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    const { mobile } = this.state;
    const { slug } = this.props.pathContext;
    const postOverlapClass = mobile ? "post-overlap-mobile" : "post-overlap";
    const postNode = this.props.data.markdownRemark;
    const {
      fields: { tags, category, sourceName },
      frontmatter: { image, link, links, title, attachments },
      html
    } = this.props.data.markdownRemark;
    return (
      <div className="post-page md-grid md-grid--no-spacing">
        <Helmet>
          <title>{`${title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO
          postPath={slug}
          postNode={postNode}
          postSEO
          type="article"
          tags={tags}
          category={category}
        />
        <PostCover image={image} />
        <div
          className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}
        >
          <Card className="md-grid md-cell md-cell--12 post">
            <Link to={`/${sourceName}s`}>&lt; Back</Link>
            <CardText className="post-body">
              <a href={link}>
                <h1 className="md-display-2 post-header">{title}</h1>
              </a>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </CardText>
            <div className="post-meta">
              <PostTags tags={tags} />
              <SocialLinks
                postPath={slug}
                postNode={postNode}
                mobile={mobile}
              />
            </div>
            {links && (
              <CardActions className="md-divider-border md-divider-border--top">
                {links.map(l => (
                  <ItemBlockLinks
                    key={`link_${l.type}`}
                    {...l}
                    attachments={attachments}
                  />
                ))}
              </CardActions>
            )}
          </Card>
        </div>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query PresentationPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            sizes(maxWidth: 800, maxHeight: 320, cropFocus: ENTROPY) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
        date
        category
        tags
        attachments {
          absolutePath
          publicURL
        }
        links {
          type
          url
        }
      }
      fields {
        sourceName
        slug
      }
    }
  }
`;
