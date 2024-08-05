const Client=require('pg').Client;
const DB=new Client(
    {
        user:'postgres',
        password:'root',
        host:'localhost',
        database:'movies',
        port:5432
    }
); 

module.exports=DB;

DB.connect().
then(console.log('Connected Successfully!!')).
catch((err) => console.log("Errror",err));