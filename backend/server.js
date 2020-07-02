const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

require('dotenv').config();

const app = express();

//db connect
mongoose.connect(process.env.DB, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

app.use('/api', routes);

//error check
app.use(function(err, req, res, next) {
   console.log(err);
   res.status(422).send({error: err.message});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});