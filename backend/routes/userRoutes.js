import express from "express";
const router = express.Router();
import {
  getUserById,
  getUsers,
  authUser,
} from "../controllers/userController.js";

router.route("/").get(getUsers);
router.route("/:id").get(getUserById);
router.post("/login", authUser);

export default router;
