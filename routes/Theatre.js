const express=require('express');
const router=express.Router();
const DB=require('../config/connection');

router.get('/',(req,res)=>{
    const id=req.params.id;
    DB.query(`SELECT * from theatre`,(error,result)=>{
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
    DB.query(`SELECT *
            FROM theatre t
            WHERE t.theatre_id IN (
            SELECT unnest(theatre_ids)
            FROM movies
            WHERE id = ${id}
            )
            ORDER BY t.theatre_id`,(error,result)=>{
        if(error){
            throw error;
        }
        else{
            const data=result.rows; 
            data.forEach((value,index)=>{
                value.show_times=value.show_times[id];
            })
            res.send(data);
        }
    })
})

module.exports=router;