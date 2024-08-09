const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./routes/userRouter');

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect('mongodb://localhost:27017')
.then(() => {
    console.log('MongoDB connected');
  })
.catch((err) => {
    console.log(err);
  });

app.use('/api/products',route);

app.listen(5000, () => {
  console.log('Server is running');
});