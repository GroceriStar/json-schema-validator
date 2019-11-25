// import { jsonFileNotEmptyTest, jsonSchemaTest } from '@groceristar/json-file-schema-validator'


// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
// const multer = require('multer');
app.use(bodyParser.urlencoded({extended: true}))
 
const app = express()
 
//CREATE EXPRESS APP
const app = express();
 
//ROUTES WILL GO HERE
app.get('/', function(req, res) {
    res.json({ message: 'WELCOME' });   
});
 
app.listen(3000, () => console.log('Server started on port 3000'));