import { Action, PagesList, PagesTypesActions } from './types';

const changeCurrentPage = (currentPage: PagesList): Action => {
  return {
    type: PagesTypesActions.MOVE_TO_ANOTHER_PAGE,
    payload: currentPage,
  };
};

export { PagesTypesActions, changeCurrentPage, PagesList };
