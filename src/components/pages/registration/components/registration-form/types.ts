import { Auth } from '../../../authentication/components/auth-form/types';

interface Registration extends Auth {
  name: string;
  lastName: string;
  repeatPassword: string;
}

export { Registration };
