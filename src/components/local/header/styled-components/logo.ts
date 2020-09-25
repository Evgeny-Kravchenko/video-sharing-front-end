import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  transition: 0.2s;
  color: #ffffff;

  &:hover {
    text-decoration: none;
    opacity: 0.5;
    color: #ffffff;
  }

  @media screen and (max-width: 575px) {
    align-self: flex-start;
    padding: 10px;
  }

  @media screen and (max-width: 400px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
  }
`;

export default Logo;
