var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    content = {};
    req.db.collection('pages').find({}, function(e, d){
        content.pages = d;

        req.db.collection('pages').findOne({url:req.params.pageName}, function (err, data) {

            content.data = '';
            res.render('index', { content: content});
        });
    });
});

router.get('/page/:pageName', function(req, res, next) {

    content = {};
    req.db.collection('pages').find({}, function(e, d){
        content.pages = d;

        req.db.collection('pages').findOne({url:req.params.pageName}, function (err, data) {

            content.data = data ? data.content : '';
            res.render('blank', { content: content});
        });
    });

});
module.exports = router;
