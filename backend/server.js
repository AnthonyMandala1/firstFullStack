const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.PORT || 5000;

require('dotenv').config();

const app = express();

app.use(bodyparser.json());

app.use('/api', routes);

//db connect
/*mongoose.connect(process.env.DB, {useNewUrlParser: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;*/

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});