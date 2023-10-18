console.clear();
import express from 'express';
import dotenv from 'dotenv';
import {USER_BBDD} from './bbdd.js'

dotenv.config();

//process.env.PORT;
const serverApp = express();
const PORT=3000;


//*defino el middleware 
serverApp.use(express.json());
serverApp.use(express.text());

//*defino los endpoints
// serverApp.post('/cuenta/:idcuenta',(req,res)=>{
//     console.log(req.body);
//     res.send()
// });

//*ENDPOINTS
//!OBTENER LOS DETALLES DE UNA CUENTA
serverApp.get('/account/:guid',(req,res)=>{
   const {guid} = req.params;
   const user = USER_BBDD.find((user)=>user.guid === req.params.guid) 
   //console.log(req.params.guid); 

   if(!user) res.status(404).send('No encontrado') 

   res.send(user)
});
//!CREAR UNA NUEVA CUENTA A PARTIR DE GUID Y NAME
serverApp.post('/account',(req,res)=>{

});
//!ACTUALIZAR UNA NUEVA CUENTA
serverApp.patch('/account/:guid',(req,res)=>{
    const {guid} = req.params;
    const user = USER_BBDD.find((user)=>user.guid === req.params.guid) 

});
//!ELIMINAR UNA CUENTA
serverApp.delete('/account/:guid',(req,res)=>{
    const {guid} = req.params;
    const userId = USER_BBDD.findIndex((user)=>user.guid === req.params.guid) 
    if(userId === -1) res.status(404).send('No encontrado') 
});


//escuchando la solicitud
serverApp.listen(PORT,()=>{
    console.log(`Servidor ejecutandose ${PORT}`);
})