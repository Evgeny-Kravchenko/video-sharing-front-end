import { Auth } from '../auth-form/types';
import { User } from '../../types';

interface RegistrationFormProps {
  onRegister: (data: User) => void;
}

interface Registration extends Auth {
  name: string;
  lastName: string;
  repeatPassword: string;
}

export { RegistrationFormProps, Registration };
