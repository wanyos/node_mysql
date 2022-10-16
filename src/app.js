
import express from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

 const app = express();

 app.use(express.json());  //convierte el body de la petición en un objeto json que envia a las rutas
 
 app.use('/api', employeesRoutes);
 app.use(indexRoutes);

 app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found...'
    });
 });

 export default app;