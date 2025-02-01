import express from 'express';
import cors from 'cors'
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

//Iniciando la app
const app=express();

//Habilitar lectura de datos de formulario
app.use(express.urlencoded({extended:true}))

//Conexión a la base de datos
try {
    await db.authenticate();
    db.sync();
    console.log("Conexión correcta a la base de datos");

} catch (error) {
    console.log(error);
}

//Habilitar NextJs
app.use(cors());
app.use(express.json());


//Puerto
const port=8000;

//Iniciando el servidor
app.listen((port),()=>{
    console.log("Servidor funcionando en el puerto "+port);
})

//Routing
app.use('/auth',usuarioRoutes); 