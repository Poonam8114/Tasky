import express from "express"
import { adminOnly, verifyToken } from "../utils/verifyUser.js"
import {
  createTask, getTasks,
    getTaskById,
    updateTask,
      deleteTask
  
} from "../controller/task.controller.js"

const router = express.Router()

router.post("/create", verifyToken, adminOnly, createTask)

router.get("/", verifyToken, getTasks)

router.get("/:id", verifyToken, getTaskById)
router.put("/:id", verifyToken, updateTask)
router.delete("/:id", verifyToken, adminOnly, deleteTask)


export default router
