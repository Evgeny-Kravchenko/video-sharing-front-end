import { User } from '../types';
import UserResponse from '../types/get-user-response';
export default class UserService {
    getUser(email: string, password: string): Promise<UserResponse | Error>;
    registerUser(user: User): Promise<boolean | Error>;
    checkUser(email: string): Promise<boolean | Error>;
}
