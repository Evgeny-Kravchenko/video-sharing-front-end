import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentPage, PagesList } from '../../../actions';

import { HeaderStyled, Logo, LogoIcon } from './styled-components';

import logoIcon from './images/video.png';
import { State } from '../../../reducers/types';

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { currentPage, isAuth } = useSelector((state: State) => ({
    currentPage: state.currentPage,
    isAuth: state.authUser.isAuth,
  }));
  const handleOnClickItemMenu = (path: PagesList) => () => dispatch(changeCurrentPage(path));
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
            onClick={handleOnClickItemMenu(PagesList.Videos)}
          >
            <Link className="nav-link" to="/videos">
              Videos
            </Link>
          </li>
          <li
            className={`nav-item ${currentPage === PagesList.Authentication ? 'active' : null}`}
            onClick={handleOnClickItemMenu(PagesList.Authentication)}
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

export default Header;
