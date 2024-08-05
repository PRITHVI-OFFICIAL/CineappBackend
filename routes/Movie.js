const express=require('express');
const router =express.Router();
const DB=require('../config/connection');

router.get('/',(req,res)=>{
    DB.query('SELECT * FROM MOVIES',(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.send(result.rows);
        }
    })
})

router.get('/:id',(req,res)=>{
    const id=req.params.id;
    DB.query(`SELECT * FROM MOVIES WHERE id=${id}`,(error,result)=>{
        if(error){
            throw error;
        }
        else{
            res.send(result.rows);
        }
    })
})

module.exports=router;