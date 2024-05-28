import express from 'express';
import { createEmployee, editEmployee, getEmployeeDetail, getEmployeeDetailById } from '../Controllers/empController.js';



const router = express.Router();

router.post("/create",createEmployee)
router.get("/emp",getEmployeeDetail)
router.get("/emp/:id",getEmployeeDetailById)
router.put("/update/:id",editEmployee)
export default router;