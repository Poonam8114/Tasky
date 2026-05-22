import express from "express"
import { adminOnly, verifyToken } from "../utils/verifyUser.js"
import {
  exportTaskReport,
  exportUsersReport,
} from "../controller/report.controller.js"

const router = express.Router()

router.get("/export/tasks", verifyToken, adminOnly, exportTaskReport)

router.get("/export/users", verifyToken, adminOnly, exportUsersReport)

export default router
//excel js used for report generation in excel format, it allows us to create and manipulate excel files easily. We use it to generate reports for tasks and users in our application.
