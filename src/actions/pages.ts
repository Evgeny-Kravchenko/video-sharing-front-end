import IAction from '../interfaces/action.interface';

enum PagesList {
  Authentication = 'auth',
  Videos = 'videos',
}

enum PagesTypesActions {
  MOVE_TO_ANOTHER_PAGE = 'MOVE_TO_ANOTHER_PAGE',
}

const changeCurrentPage = (currentPage: PagesList): IAction => {
  return {
    type: PagesTypesActions.MOVE_TO_ANOTHER_PAGE,
    payload: currentPage,
  };
};

export { PagesTypesActions, changeCurrentPage, PagesList };
