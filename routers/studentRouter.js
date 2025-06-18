import express from "express"
import Student from "../models/student.js"
import { getStudents, saveStudents } from "../controllers/studentController.js"


const studentRouter = express.Router()

studentRouter.get("/",getStudents)

studentRouter.post("/",saveStudents)

export default studentRouter;
