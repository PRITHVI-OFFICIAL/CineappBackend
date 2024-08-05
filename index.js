// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 10000;

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// const DB="mongodb+srv://prithviofficial02:gekTxVbhMnoiRdrP@cluster0.4j68sxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(DB)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB', err));

//   const mongoose = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 10000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const fs = require('fs');
const csv = require('csv-parser');
const Movies = require('./models/Movie');

const DB="mongodb+srv://prithviofficial02:gekTxVbhMnoiRdrP@cluster0.4j68sxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));
const importCSV = async (filePath) => {
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        await Movies.insertMany(results);
        console.log('Data imported successfully');
        // DB.connection.close();
      } catch (error) {
        console.error('Error inserting data: ', error);
      }
    });
};

importCSV('movies.csv');
