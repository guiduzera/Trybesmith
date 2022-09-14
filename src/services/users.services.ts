import UserResponse from '../interfaces/userResponse.interface';
import UsersBody from '../interfaces/users.body.interface';
import UsersModel from '../models/users.model';

export default class UsersServices {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel();
  }

  create = async (body: UsersBody): Promise<UserResponse> => this.model.create(body);

  login = async (body: UsersBody): Promise<UserResponse> => this.model.login(body);
}