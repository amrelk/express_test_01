const express = require('express');
const router = express.Router();

const Datastore = require('@google-cloud/datastore');
const projectId = 'windy-tower-212703';
const datastore = new Datastore({
    projectId: projectId,
});


router.get('/', function(req, res, next) {
    res.render('index', { title: 'amrelk test' });
});

router.get('/:number_1(\\d+)', function(req, res, next) {
    res.render('number', req.params)
});

router.get('/dataStoreTest/:valueA/:valueB/:valueC', function (req, res, next) {
    const entity = {
        key: datastore.key(['test']),
        data: {
            valueA: req.params.valueA,
            valueB: req.params.valueB,
            valueC: req.params.valueC,
        }
    };
    datastore.upsert(entity).then(() => {
        console.log('entity inserted');
        res.send('did it');
    });
});

module.exports = router;
