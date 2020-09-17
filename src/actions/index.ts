import { Pages } from '../enums';
import IAction from '../interfaces/action.interface';
import IRegistration from '../interfaces/registration.interface';

const changeCurrentPage = (currentPage: Pages): IAction => {
  return {
    type: 'MOVE_TO_ANOTHER_PAGE',
    payload: currentPage,
  };
};

const registerUser = (registerUserData: IRegistration): IAction => {
  return {
    type: '',
    payload: registerUserData,
  };
};

export { changeCurrentPage, registerUser };
