import React from "react";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Link from "gatsby-link";
import GoodreadsBook from "../components/GoodreadsBook/GoodreadsBook";
import Navigation from "../components/Navigation/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(new RegExp(`^${pathPrefix}`), "")
      .split("/");
    let title = capitalize(currentPath[currentPath.length - 1]);
    if (currentPath[0] === "") {
      title = "Home";
    } else if (currentPath[0] === "about") {
      title = "About";
    } else if (currentPath[0] === "computers") {
      title = "Computers";
    } else if (currentPath[0] === "tags") {
      const tag = currentPath[1];
      title = "Tags";
      if (tag) {
        title = `Tagged in ${capitalize(tag)}`;
      }
    } else if (currentPath[0] === "categories") {
      const category = currentPath[1];
      title = "Categories";
      if (category) {
        title = `Category - ${capitalize(category)}`;
      }
    } else if (currentPath[0] === "projects") {
      const project = currentPath[1];
      title = "Projects";
      if (project) {
        title = `Project - ${capitalize(project)}`;
      }
    } else if (currentPath[0] === "presentations") {
      const presentation = currentPath[1];
      title = "Presentations";
      if (presentation) {
        title = `Presentation - ${capitalize(presentation)}`;
      }
    }
    return title;
  }
  render() {
    const {
      children,
      data: {
        profileImage,
        currentlyReading: { edges: currentlyReading },
        recentlyRead: { edges: recentlyRead }
      }
    } = this.props;
    return (
      <Navigation config={config} LocalTitle={this.getLocalTitle()}>
        <div>
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <div id="page">
            <section id="body">{children()}</section>
            <section id="profile">
              <Img
                {...profileImage}
                alt="Gavin December 1989"
                className="profile-img"
              />
              <h1>Gavin Mogan</h1>
              <h2>
                Hi. I&apos;m Gavin. I&apos;m a coder at Sauce Labs. At home I
                code, game, hang out, all the cool non robot things to do.
                #notarobot
              </h2>
              <p>Friends Sites</p>
              <ul>
                <li>
                  <a rel="friend" href="https://forgreatjustice.ca/">
                    For Great Justice
                  </a>{" "}
                  (<Link to="/tags/nigel">Nigel</Link>)
                </li>
              </ul>
              {currentlyReading &&
                currentlyReading.length && (
                  <div>
                    <p>Currently Reading</p>
                    {currentlyReading.map(node => (
                      <GoodreadsBook
                        rating={node.node.review.rating}
                        {...node.node.book}
                      />
                    ))}
                  </div>
                )}
              {recentlyRead &&
                recentlyRead.length && (
                  <div>
                    <p>Recently Read</p>
                    {recentlyRead.map(node => (
                      <GoodreadsBook
                        rating={node.node.review.rating}
                        {...node.node.book}
                      />
                    ))}
                  </div>
                )}
            </section>
          </div>
        </div>
      </Navigation>
    );
  }
}
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexLayout {
    profileImage: imageSharp(
      id: { regex: "/src/images/Gavin-December-1989.png/" }
    ) {
      resolutions(height: 150, width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    currentlyReading: allGoodreadsBook(
      limit: 2
      sort: { fields: [review___readAt], order: DESC }
      filter: { shelfNames: { in: ["currently-reading"] } }
    ) {
      edges {
        node {
          review {
            rating
          }
          book {
            bookID
            link
            title
            titleWithoutSeries
            imageUrl: smallImageUrl
            authors {
              link
              name
            }
          }
        }
      }
    }
    recentlyRead: allGoodreadsBook(
      limit: 5
      sort: { fields: [review___readAt], order: DESC }
      filter: { review: { readAt: { ne: null } }, shelfNames: { in: ["read"] } }
    ) {
      edges {
        node {
          review {
            readAt
            rating
          }
          book {
            bookID
            link
            title
            titleWithoutSeries
            imageUrl: smallImageUrl
            authors {
              link
              name
            }
          }
        }
      }
    }
  }
`;
