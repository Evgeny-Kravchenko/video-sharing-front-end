import React, { FC, ReactElement } from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  font-size: 2rem;
  transition: 0.2s;

  &:hover {
    text-decoration: none;
    color: #ffffff;
  }
`;

const HeaderStyled = styled.header`
  width: 100%;
`;

const Header: FC = (): ReactElement => {
  return (
    <HeaderStyled>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Logo to="/">Video sharing</Logo>
        <ul className="navbar-nav d-flex justify-content-end ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Video
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
