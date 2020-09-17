import users from '../mock/index';

export default class UserService {
  async getUser(email: string, password: string) {
    console.log(email, password);
    console.log(users);
  }
}
