import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fasTasks from '@fortawesome/fontawesome-free-solid/faTasks';
import fasUser from '@fortawesome/fontawesome-free-solid/faUser';
import fasDesktop from '@fortawesome/fontawesome-free-solid/faDesktop';
import fasHome from '@fortawesome/fontawesome-free-solid/faHome';
import fasFilePowerpoint from '@fortawesome/fontawesome-free-solid/faFilePowerpoint';

const FakeLink = (props) => {
  const { to, children, ...rest } = props;
  return <Link to={to} {...rest}>{children}</Link>;
};

function GetNavList (config) {
  const NavList = [
    {
      primaryText: 'Home',
      leftIcon: (
        <FontAwesomeIcon icon={fasHome} className="md-icon" fixedWidth />
      ),
      component: FakeLink,
      to: '/'
    },
    {
      divider: true
    }
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: (
          <FontAwesomeIcon icon={link.icon} className="md-icon" fixedWidth />
        ),
        component: 'a',
        href: link.url
      });
    });
  }
  NavList.push({ divider: true });

  NavList.push({
    primaryText: 'Projects',
    leftIcon: (
      <FontAwesomeIcon icon={fasTasks} className="md-icon" fixedWidth />
    ),
    component: FakeLink,
    to: '/projects/'
  });
  NavList.push({
    primaryText: 'Presentations',
    leftIcon: (
      <FontAwesomeIcon
        icon={fasFilePowerpoint}
        className="md-icon"
        fixedWidth
      />
    ),
    component: FakeLink,
    to: '/presentations/'
  });
  NavList.push({
    primaryText: 'About',
    leftIcon: <FontAwesomeIcon icon={fasUser} className="md-icon" fixedWidth />,
    component: FakeLink,
    to: '/about/'
  });
  NavList.push({
    primaryText: 'Computers',
    leftIcon: (
      <FontAwesomeIcon icon={fasDesktop} className="md-icon" fixedWidth />
    ),
    component: FakeLink,
    to: '/computers/'
  });
  return NavList;
}
export default GetNavList;
