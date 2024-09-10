import { Router } from "express";
import {createUser, getAllUsers, getOneUser, updateUser, deleteUser} from "../controllers/user.Controllers";

const userRouter = Router();

userRouter.route('/users')
  .post(createUser)
  .get(getAllUsers);

userRouter.route('/users/:id')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

export default userRouter;