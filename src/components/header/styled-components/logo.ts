import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled(Link)`
  font-size: 2rem;
  transition: 0.2s;
  color: #ffffff;

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default Logo;
