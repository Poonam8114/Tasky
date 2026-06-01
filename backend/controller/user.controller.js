import Task from "../models/task.model.js"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"


export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: "user" }).select("-password")
    //password exclude


    //to count all the user task
    //promise.all to count all the user task parallely or for better performance
    const userWithTaskCounts = await Promise.all(
      users.map(async (user) => {
        const pendingTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Pending",
        })

// to check status

        const inProgressTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "In Progress",
        })
// for task completion
        const completedTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: "Completed",
        })

        return {
          ...user._doc,
          pendingTasks,
          inProgressTasks,
          completedTasks,
        }
      })
    )

    res.status(200).json(userWithTaskCounts)
  } catch (error) {
    next(error)
  }
}

export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password")

    if (!user) {
      return next(errorHandler(404, "User not found!"))
    }

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}
