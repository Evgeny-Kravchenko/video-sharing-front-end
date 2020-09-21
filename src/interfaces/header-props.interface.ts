import { PagesList } from '../actions';
import { Dispatch } from 'react';

export default interface IHeaderProps {
  currentPage: PagesList;
  isAuth: boolean;
  onChangeCurrentPage: Dispatch<PagesList>;
}
