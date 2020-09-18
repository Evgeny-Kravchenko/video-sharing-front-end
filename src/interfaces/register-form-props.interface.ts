import {IUser} from "./index";

export default interface IRegistrationFormProps {
  onRegister: (data: IUser) => void;
}
