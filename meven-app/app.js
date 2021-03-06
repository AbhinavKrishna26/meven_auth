const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
//initialising the app

const app = express();

const MONGO_URI = 'mongodb+srv://aks123:abc123@cluster0-eivnf.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI || 'mongodb://localhost/mevn_auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('mongoose is connected!!!!');
});


//middlewares
//form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
//json body
app.use(bodyParser.json());
//cors
app.use(cors());


//setting up static directory
app.use(express.static(path.join(__dirname,'public')));
// use the passport middleware
app.use(passport.initialize());

//bring in the strategy
require('./config/passport')(passport);


//bring in the database config and connect with database
const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('database connected succesfully '+ db)
}).catch(err =>{
    console.log('unable to connect to database '+ err)
});
//app.get('/',(req, res) => {
  //  res.send("<h1>Hello World</h1>")
//})
//user route
const users = require('./routes/api/users');
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server started on port '+ PORT);
})