const mongoose = require('mongoose')
require('dotenv').config();

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1/mrDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection to db is success');
}).catch(()=>{
    console.log('connection to db is fail');
})