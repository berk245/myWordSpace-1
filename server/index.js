const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config(); 

const app = express();

//Connect to Auth DB

mongoose.connect("mongodb+srv://newUser:123new@cluster0-oixaf.gcp.mongodb.net/deutschApp?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true},
() => console.log('connected to DB'));


//midware
app.use(bodyParser.json())
app.use(cors())



const exerciseRoutes = require('./routes/api/exerciseRoutes')
app.use('/api', exerciseRoutes);

const signUp = require('./routes/Authentication/signUp')
app.use('/signup', signUp);

const login = require('./routes/Authentication/login')
app.use('/login', login);


//Handle Production
if(process.env.NODE_ENV === "production"){
    //Static Folder
    app.use(express.static(__dirname+'/public'))
    //Handle SPA
    app.get('*', (req, res) => res.sendFile(__dirname+'/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`))