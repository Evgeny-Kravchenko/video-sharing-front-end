import React, { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { HeaderStyled, Logo } from './styled-components';

const Header: FC = (): ReactElement => {
  return (
    <HeaderStyled>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Logo to="/">Video sharing</Logo>
        <ul className="navbar-nav d-flex justify-content-end ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Authentication
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
