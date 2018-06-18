const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
    const kev = {
        name: 'Kev',
        age: 22,
        cool: true
    };
    // res.send('Hey! It works!');
    // res.json(kev);
    // res.send(req.query."var-name"); //gets information from the url 
    // res.send(req.query);
    // http://localhost:7777/?name=Nony&age=4k&favoriteFood=pizza
    res.render('hello', {
        name: 'Kevin',
        color: 'red',
        title: 'Home'
    });
});
// router.get('/', (req, res) => {
// res.send('Hey! It works!');
// });

module.exports = router;