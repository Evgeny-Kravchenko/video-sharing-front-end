import { Pages } from '../enums';
import { Dispatch } from 'react';

export default interface IHeaderProps {
  currentPage: Pages;
  onChangeCurrentPage: Dispatch<Pages>;
}
