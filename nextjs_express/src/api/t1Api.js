const express = require('express');

const router = express.Router();

router.get('/books', (req, res,next) => {
    let books = [{
        name:'A Book'
    },{
        name:'B Book'
    }];
    res.json(books);
});

module.exports = router;