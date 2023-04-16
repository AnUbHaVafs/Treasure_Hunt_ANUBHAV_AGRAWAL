const express = require('express')
const env = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const cors = require('cors');

mongoose.set('strictQuery', false);
mongoose.Promise = global.Promise;

env.config();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())


const userDataRoute = require('./routes/user.js')
const db = mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/Treasure_Hunt")
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.message)
    })

app.use(cors());
app.use('/api', userDataRoute);
// app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} `)
})

