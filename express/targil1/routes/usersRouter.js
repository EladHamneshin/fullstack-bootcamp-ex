import express from "express";
import * as usersController from "../controllers/usersController.js";

export const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUserById);

router.post("/exist", usersController.isEmailPasswordExist);

router.post("/", usersController.addUser);

router.delete("/:id", usersController.deleteUser);

router.put("/:id", usersController.updateUser);

