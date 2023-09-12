import { usersDAO } from '../DAOs/factoryDAO.js';
import { sendMail, createOptions } from '../services/mailing.js';

export const getUsersController = async (req, res) => {
    let users = await usersDAO.getAllUsers();
    res.send(users)
};

export const createUsersController = async (req, res) => {
    let user = req.body;
    let newUser = usersDAO.createUser(user);
    let options = createOptions(user.email);
    let mailResult = await sendMail(options);
    res.send({ status: 'success', payload: { newUser, mailResult }})
};

export const updateUsersController = (req, res) => {
    res.send('users router put ok')
};

export const deleteUsersController = (req, res) => {
    res.send('users router delete ok')
};