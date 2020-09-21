import UserService from '../../services/user-service';

interface Auth {
  email: string;
  password: string;
}

interface AuthFormProps {
  onAuth: (data: Auth) => void;
  userService: UserService;
}

export { AuthFormProps, Auth };
