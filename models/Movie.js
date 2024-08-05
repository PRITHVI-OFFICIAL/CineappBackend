// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   id: Number,
//   title: String,
//   year: Number, 
//   genre:String,
//   poster:String, 
  
// });

// module.exports = mongoose.model('User', userSchema);



const mongoose=require('mongoose'); 

const MovieSchema=new mongoose.Schema({
  id: Number,
  title: String,
  year: Number, 
  genre:String,
  poster:String, 
  description: String, 
  imdb_rating: Number, 
  theatre_ids: Object,
})

module.exports=mongoose.model('Movies',MovieSchema,'movies');