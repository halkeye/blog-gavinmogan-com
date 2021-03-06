import { graphql, Link } from 'gatsby';
import React from 'react';
import { toPostInfo } from '../postUtils.js';

import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Typography,
  withStyles
} from '@material-ui/core';

import Layout from '../layouts/index.jsx';
import ItemBlockLinks from '../components/ItemBlockLinks/ItemBlockLinks.jsx';
import PostTags from '../components/PostTags/PostTags.jsx';
import PostCover from '../components/PostCover/PostCover.jsx';
import SocialLinks from '../components/SocialLinks/SocialLinks.jsx';
import SEO from '../components/SEO/SEO.jsx';
import './b16-tomorrow-dark.css';
import './post.scss';

const styles = theme => ({
  p: {
    margin: '15px 0'
  },
  root: {
    width: '100%',
    marginBottom: '2em'
  }
});

class ItemsTemplate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount () {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize () {
    if (window.innerWidth >= 640) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render () {
    const { mobile } = this.state;
    const { classes } = this.props;
    const { slug, urlPrefix } = this.props.pageContext;
    const postOverlapClass = mobile ? 'post-overlap-mobile' : 'post-overlap';
    const postNode = toPostInfo({ node: this.props.data.markdownRemark });
    return (
      <Layout location={this.props.location} title={postNode.title}>
        <div className="post-page md-grid md-grid--no-spacing">
          <SEO
            postPath={postNode.slug}
            postNode={postNode}
            type="website"
            tags={postNode.tags}
            categories={postNode.categories}
          />
          <PostCover cover={postNode.cover} />
          <div className={`md-grid md-cell--9 post-page-contents mobile-fix ${postOverlapClass}`}>
            <Card className="md-grid md-cell md-cell--12 post">
              <Link to={urlPrefix}>&lt; Back</Link>
              <CardContent className="post-body">
                <a href={postNode.link}>
                  <Typography className={classes.title} color="textSecondary" variant="h2">{postNode.title}</Typography>
                </a>
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </CardContent>
              <CardActions>
                <PostTags tags={postNode.tags} />
                <SocialLinks
                  postPath={slug}
                  postNode={postNode}
                  mobile={mobile}
                />
              </CardActions>
              {postNode.links && (
                <React.Fragment>
                  <Divider />
                  <CardActions className="md-divider-border md-divider-border--top">
                    {postNode.links.map(l => (
                      <ItemBlockLinks
                        key={`link_${l.type}`}
                        {...l}
                        attachments={postNode.attachments}
                      />
                    ))}
                  </CardActions>
                </React.Fragment>
              )}
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
     markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 320, cropFocus: ENTROPY) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
        link
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

export default withStyles(styles)(ItemsTemplate);
