const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');

//Body Parser is needed to parse through any given http POST body
const bodyParser = require("body-parser");
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

//parse application/x-www-form-urlencoded
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
    songModel.find((err,data) =>{
        res.json(data)
    })

})

app.get('/api/songs/:id', (req,res)=>{
    console.log(req.params.id);

    songModel.findById(req.params.id, (err,data) =>{
        res.json(data);
    })
})

app.put('/api/songs/:id', (req, res) => {
    console.log("Update song: " + req.params.id);
    console.log(req.body);
    songModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

//Listening POST for /api/songs
app.post('/api/songs', (req, res) => {
    console.log('song recieved')
    console.log(req.body.Title)
    console.log(req.body.Year)
    console.log(req.body.Type)
    console.log(req.body.Cover)

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


app.delete('/api/songs/:id', (req, res) => {
    console.log("Delete Song: " + req.params.id);
    songModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})