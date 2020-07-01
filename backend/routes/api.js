const express = require('express');
const router = express.Router();

//get users
router.get('/users', function (req, res) {
    res.send({type:'GET'});
});

//add user
router.post('/users', function (req, res) {
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name
    });
});

//update user
router.put('/users/:id', function (req, res) {
    res.send({type:'PUT'});
});

//delete user
router.delete('/users/:id', function (req, res) {
    res.send({type:'DELETE'});
});


module.exports = router;