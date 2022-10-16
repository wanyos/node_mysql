import {Router} from 'express';
import {getEmployees, getEmployee, crearEmployees, updateEmployees, deleteEmployees} from '../controller/employees.controller.js'

const router = Router();

router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

 router.post('/employees', crearEmployees);

 router.patch('/employees/:id', updateEmployees);

 router.delete('/employees/:id', deleteEmployees);

export default router;