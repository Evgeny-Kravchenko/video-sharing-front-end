import React, { Dispatch, FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import IHeaderProps from '../../interfaces/header-props.interface';
import { PagesList } from '../../actions';

import { changeCurrentPage } from '../../actions';

import { HeaderStyled, Logo, LogoIcon } from './styled-components';

import logoIcon from './images/video.png';
import { IStateAuthUser } from '../../interfaces';

const Header: FC<IHeaderProps> = (props: IHeaderProps): ReactElement => {
  const {
    currentPage,
    isAuth,
    onChangeCurrentPage,
  }: { currentPage: PagesList; onChangeCurrentPage: Dispatch<PagesList>; isAuth: boolean } = props;
  const pathForLogo = isAuth ? PagesList.Videos : PagesList.Authentication;
  return (
    <HeaderStyled>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 py-md-3 py-2">
        <Logo to={pathForLogo} onClick={() => changeCurrentPage(pathForLogo)}>
          <LogoIcon src={logoIcon} alt="Video sharing" />
          Video sharing
        </Logo>
        <ul className="navbar-nav d-flex justify-content-end ml-auto">
          <li
            className={`nav-item ${currentPage === PagesList.Videos && isAuth ? 'active' : null}`}
            onClick={() => onChangeCurrentPage(PagesList.Videos)}
          >
            <Link className="nav-link" to="/videos">
              Videos
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === PagesList.Authentication ? 'active' : null}`}
            onClick={() => onChangeCurrentPage(PagesList.Authentication)}
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

const mapStateToProps = ({
  currentPage,
  authUser,
}: {
  currentPage: PagesList;
  authUser: IStateAuthUser;
}) => {
  return {
    currentPage,
    isAuth: authUser.isAuth,
  };
};

const mapDispatchToProps = {
  onChangeCurrentPage: changeCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
