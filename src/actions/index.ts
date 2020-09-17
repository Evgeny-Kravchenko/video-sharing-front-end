import { Pages } from '../enums';
import IAction from '../interfaces/action.interface';

const changeCurrentPage = (currentPage: Pages): IAction => {
  return {
    type: 'MOVE_TO_ANOTHER_PAGE',
    payload: currentPage,
  };
};

export { changeCurrentPage };
