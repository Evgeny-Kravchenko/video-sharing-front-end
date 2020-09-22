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

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

export default Logo;
