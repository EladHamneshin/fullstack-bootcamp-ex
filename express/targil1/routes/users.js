import express from "express";
import usersController from "../controllers/usersController.js";

export const router = express.Router();

router.get("/", usersController.getUsers);

router.get("/:uid", usersController.getUserById);

router.post("/exist", usersController.getUserByEmail);

router.post("/", usersController.addUser);

router.delete("/:uid", usersController.deleteUser);

router.put("/:uid", usersController.updateUser);

