import express from "express";
import * as usersController from "../controllers/usersController.js";

export const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:uid", usersController.getUserById);

router.post("/exist", usersController.isEmailPasswordExist);

router.post("/", usersController.addUser);

router.delete("/:uid", usersController.deleteUser);

router.put("/:uid", usersController.updateUser);

