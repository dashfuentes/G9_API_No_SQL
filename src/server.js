import express, { urlencoded, json } from "express";

const app = express();

//Import Routes
import indexRoutes from './routes/index';
import taskRoutes from './routes/tasks'

//settings
app.set( 'port', 4000 );

//Middlewares
app.use(urlencoded({extended:false}));
app.use( json() );

//Routes
app.use( indexRoutes )
app.use( '/tasks', taskRoutes );

export default app;
