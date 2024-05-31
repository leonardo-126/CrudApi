import express from "express"
import { DeleteUser, UpdateUser, addUser, getUsers } from "../controllers/user.js"

const router = express.Router()

router.get("/", getUsers)
router.post("/add/", addUser)
router.put("/:id", UpdateUser)
router.delete("/delete/:id", DeleteUser)

export default router