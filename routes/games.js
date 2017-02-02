/**
 * Created by Sharpshooter on 2017-02-01.
 */

var express = require('express');
var router = express.Router();

/* GET games index page. */
router.get('/', function(req, res, next) {
    res.render('Games/index');
});

// make public
module.exports = router;