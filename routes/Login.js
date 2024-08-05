const express=require('express'); 
const router = express.Router(); 
const DB=require('../config/connection');


router.post('/',(req,res)=>{

    const {username,password}=req.body;
    
    DB.query(`SELECT EXISTS(SELECT 1 FROM users WHERE user_name= $1)`,[username],(error,result)=>{
       
                if(result.rows[0].exists){

                    const query = 'SELECT user_name, password FROM Users WHERE user_name = $1 AND password = $2';
                    const values = [username, password];
                
                    DB.query(query, values, (e, r) => {
                        if (e) {
                            res.status(500).send(error);
                        } else {
                            res.json(r.rows);
                        }
                    });
                }
                else{
                    res.json({exists:result.rows[0].exists,message:"User not Exists"});
                }
    })
})

module.exports=router;