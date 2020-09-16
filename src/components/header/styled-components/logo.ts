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

export default Logo;
