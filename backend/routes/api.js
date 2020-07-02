const express = require('express');
const router = express.Router();
const User = require('../models/user');

//get users
router.get('/users', function (req, res, next) {
    res.send({type:'GET'});
});

//add user
router.post('/users', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next)
});

//update user
router.put('/users/:id', function (req, res, next) {
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
       User.findOne({_id: req.params.id}).then(function(user) {
           res.send(user);
       });
    });
});

//delete user
router.delete('/users/:id', function (req, res, next) {
    User.findByIdAndRemove({_id: req.params.id}).then(function(user) {
        res.send(user);
    });
});


module.exports = router;