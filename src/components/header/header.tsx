import React, { Dispatch, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import IHeaderProps from '../../interfaces/header-props.interface';
import { Pages } from '../../enums';

import { changeCurrentPage } from '../../actions';

import { HeaderStyled, Logo } from './styled-components';

const Header: FC<IHeaderProps> = (props: IHeaderProps): ReactElement => {
  const {
    currentPage,
    isAuth,
    onChangeCurrentPage,
  }: { currentPage: Pages; onChangeCurrentPage: Dispatch<Pages>; isAuth: boolean } = props;
  return (
    <HeaderStyled>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 py-md-3 py-2">
        <Logo to={isAuth ? 'videos' : 'auth'}>Video sharing</Logo>
        <ul className="navbar-nav d-flex justify-content-end ml-auto">
          <li
            className={`nav-item ${currentPage === Pages.Videos && isAuth ? 'active' : null}`}
            onClick={() => onChangeCurrentPage(Pages.Videos)}
          >
            <Link className="nav-link" to="/videos">
              Videos
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === Pages.Authentication ? 'active' : null}`}
            onClick={() => onChangeCurrentPage(Pages.Authentication)}
          >
            <Link className="nav-link" to="/auth">
              Authentication
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

const mapStateToProps = ({ currentPage, isAuth }: { currentPage: Pages; isAuth: boolean }) => {
  return {
    currentPage,
    isAuth,
  };
};

const mapDispatchToProps = {
  onChangeCurrentPage: changeCurrentPage,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header);
