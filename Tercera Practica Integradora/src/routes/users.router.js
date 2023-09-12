import { Router } from 'express';
import { 
    getUsersController,
    createUsersController,
    updateUsersController,
    deleteUsersController
 } from '../controllers/users.controller.js';

const usersRouter = Router();

usersRouter.get('/', getUsersController)
usersRouter.post('/', createUsersController);
usersRouter.put('/', updateUsersController);
usersRouter.delete('/', deleteUsersController)


export default usersRouter;