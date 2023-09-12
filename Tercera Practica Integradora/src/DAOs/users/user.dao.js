import { usersModel } from "../models/users.model.js";

export default class UsersDAOMongo {
  constructor() {
    this.model = usersModel;
  }

  getAllUsers = async () => {
    try {
      const users = await this.model.find();
      return users;
    } catch (error) {
      console.log(error);
      throw new Error("Error getting users from mongo");
    }
  };

  createUser = async (user) => {
    try {
      const newUser = await this.model.create(user);
      return newUser;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating user from mongo");
    }
  };
}