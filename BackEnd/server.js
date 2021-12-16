//Setup of server
const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');

//Required setup to run npm Build(combining server and front of page on the same localhost)
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//Cors is needed because without it, we wont be able to request resources outside the server domain
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Body Parser is needed to parse through any given http POST body
const bodyParser = require("body-parser");

//parse application
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//Connecting to the Mongoose database
const myConnectionString = 'mongodb+srv://svetlinN:anshlom4321@projectdatabase.s7b7w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(myConnectionString);
}

//Schema for the structure of the documents in the database
const Schema = mongoose.Schema;
var songSchema = new Schema({
    Title: String,
    Year: String,
    Type: String,
    Cover: String
})

//Model - used when we want to interact with the database
var songModel = mongoose.model("song", songSchema)

//Listening GET for / (homepage)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Listening GET for /api/songs
app.get('/api/songs', (req, res) => {
    songModel.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data)
        }
    })
})

//Listening GET reqeust for a specific song
app.get('/api/songs/:id', (req,res)=>{
    console.log(req.params.id);
    songModel.findById(req.params.id, (err,data) =>{
        if (err) {
            res.send(err);
        } else {
            res.json(data)
        }
        
    })
})

//Listening PUT(update) reqeust for a specific song
app.put('/api/songs/:id', (req, res) => {
    songModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
})

//Listening POST for /api/songs
app.post('/api/songs', (req, res) => {
    //Models are responsible for creating and reading documents from the underlying MongoDB database.
    songModel.create({
        Title: req.body.Title,
        Year: req.body.Year,
        Type: req.body.Type,
        Cover: req.body.Cover
    })
    //This sends a messaage back to ensure items added to the database are not added
    //multiple times by mistake
    res.send('Data Sent to Database!')
})

//Listening DELETE reqeust for a specific song
app.delete('/api/songs/:id', (req, res) => {
    songModel.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

//Port for listening
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})