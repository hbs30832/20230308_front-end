// src/routes/index.js
import { Router } from "express";
import usersRoute from "./users";
import todosRoute from "./todos";

const router = Router();

router.use("/users", usersRoute);
router.use("/todos", todosRoute);

export default router;
