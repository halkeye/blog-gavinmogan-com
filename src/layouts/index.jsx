import { Link } from 'gatsby';
import React from 'react';
import {
  AppBar,
  ClickAwayListener,
  Divider,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  Drawer,
  withStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Headers from './Headers.jsx';
import Footer from '../components/Footer/Footer.jsx';
import GetNavList from '../components/Navigation/NavList.jsx';
import ProfileImage from '../components/ProfileImage/ProfileImage.jsx';
import UserDescription from '../components/UserDescription';
import config from '../../data/SiteConfig.js';
import './index.scss';
import './global.scss';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  }
});

class MainLayout extends React.Component {
  constructor (props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  handleClickAway = () => {
    this.setState({ drawerOpen: false });
  };

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render () {
    const { classes, children, title } = this.props;
    return (
      <div className={classes.root}>
        <Headers />
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              {title || 'Home'}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen}>
          <div className={classes.list}>
            <ClickAwayListener onClickAway={this.handleClickAway}>
              <List>
                {
                  GetNavList(config).map((userLink, idx) => {
                    if (userLink.divider) {
                      return <Divider key={idx} />;
                    }
                    if (userLink.href) {
                      return (
                        <ListItem key={idx}>
                          <a tabIndex={idx} role="button" href={userLink.href}>{userLink.leftIcon} {userLink.primaryText}</a>
                        </ListItem>
                      );
                    }
                    return (
                      <ListItem key={idx}>
                        <Link tabIndex={idx} role="button" to={userLink.to}>{userLink.leftIcon} {userLink.primaryText}</Link>
                      </ListItem>
                    );
                  })
                }
              </List>
            </ClickAwayListener>
          </div>
        </Drawer>
        <section id="page">
          <main id="body" className={classes.content}>
            {children}
          </main>
          <aside id="profile">
            <ProfileImage />
            <h1>Gavin Mogan</h1>
            <UserDescription />
            <h2>Friends Sites</h2>
            <ul>
              <li>
                <a rel="friend" href="https://forgreatjustice.ca/">
                  For Great Justice
                </a>{' '}
                (<Link to="/tags/nigel">Nigel</Link>)
              </li>
            </ul>
            <h2>Federverse</h2>
            <ul>
              <li><a rel="me" href="https://toot.cafe/@halkeye">Mastodon</a></li>
              <li><a rel="me" href="https://matrix.to/#/@halkeye:g4v.dev">Matrix</a></li>
            </ul>
          </aside>
        </section>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(MainLayout);
