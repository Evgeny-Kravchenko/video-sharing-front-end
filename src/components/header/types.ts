import { Dispatch } from 'react';
import { PagesList } from '../../actions';

export default interface HeaderProps {
  currentPage: PagesList;
  isAuth: boolean;
  onChangeCurrentPage: Dispatch<PagesList>;
}
