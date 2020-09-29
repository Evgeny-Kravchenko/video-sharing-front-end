import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentPage, PagesList } from '../../../redux/actions';

import { HeaderStyled, Logo, LogoIcon, NavUl } from './styled-components';

import logoIcon from './images/video.png';

import { getCurrentPage, getIsAuth } from '../../../redux/selectors';

const Header: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const handleOnClickItemMenu = (path: PagesList) => () => dispatch(changeCurrentPage(path));

  const currentPage = useSelector(getCurrentPage);
  const isAuth = useSelector(getIsAuth);

  const pathForLogo = isAuth ? PagesList.Videos : PagesList.Authentication;

  return (
    <HeaderStyled>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2 py-md-3 py-2">
        <Logo to={pathForLogo} onClick={() => changeCurrentPage(pathForLogo)}>
          <LogoIcon src={logoIcon} alt="Video sharing" />
          Video sharing
        </Logo>
        <NavUl className="navbar-nav d-flex justify-content-end ml-auto">
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
          {!isAuth && (
            <li
              className={`nav-item ${currentPage === PagesList.Registrations ? 'active' : null}`}
              onClick={handleOnClickItemMenu(PagesList.Registrations)}
            >
              <Link className="nav-link" to="/registration">
                Registration
              </Link>
            </li>
          )}
        </NavUl>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
