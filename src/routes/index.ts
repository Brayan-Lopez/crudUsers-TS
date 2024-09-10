import { Router } from "express";
import userRouter from "./user.Router";

const router = Router();

router.use(userRouter)

export = router