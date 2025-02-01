import {check,validationResult} from 'express-validator'
import Usuario from '../models/Usuario.js';



const formularioLogin=(req,res)=>{

        res.send({
            autenticado:true
        })
}


const formularioRegistro=(req,res)=>{

    res.send({
        
    })
}

//Método post para registrar el usuario
const registrar=async(req,res)=>{
    
    //Validación
    console.log(req.body);
    
    await check('email').isEmail().withMessage('Correo incorrecto').run(req),
    await check('password').isLength({min:8}).withMessage('La contraseña debe contener mínimo 8 carácteres').run(req);

    let resultado=validationResult(req);

    if(req.body.nombre===""){
        res.json('El nombre no puede estar vacío');
        return 
    }
    else if(req.body.password!==req.body.password2){
        res.json('Las contraseñas no coinciden');
        reutrn 
    }

    else if(!resultado.isEmpty()){  
        //Hay errores
        res.json(resultado.array())
        return 
    }

        const usuario=await Usuario.create(req.body)
        res.json([usuario,'Usuario registrado']);
    
    
    
}

const formularioOlvidePassword=()=>{
    res.send({

    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    registrar
}