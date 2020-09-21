import Action from './types';

enum PagesList {
  Authentication = 'auth',
  Videos = 'videos',
}

enum PagesTypesActions {
  MOVE_TO_ANOTHER_PAGE = 'MOVE_TO_ANOTHER_PAGE',
}

const changeCurrentPage = (currentPage: PagesList): Action => {
  return {
    type: PagesTypesActions.MOVE_TO_ANOTHER_PAGE,
    payload: currentPage,
  };
};

export { PagesTypesActions, changeCurrentPage, PagesList };
