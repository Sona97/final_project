var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');


router.get('/', function(req, res, next) {
    res.render('admin/create', { title: 'Express' });
});

router.get('/create', function(req, res, next) {
    res.render('admin/create', { title: 'Express' });
});
router.get('/pages', function(req, res, next) {
    req.db.collection('pages').find({}, function(err, data){
        res.render('admin/pages', { pages:data});
    });
});

router.post('/delete', function(req, res){
    req.db.collection('pages').remove({url:req.body.url}, {}, function(){
        req.db.collection('pages').find({}, function(err, data){
            res.end();
        });
    })

});
router.post('/create', function(req, res, next) {

    req.db.collection('pages').save(req.body);
    res.render('admin/create', { title: 'Express' });
});

module.exports = router;
