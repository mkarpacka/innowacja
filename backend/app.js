const express = require('express');
const app = express();
const mongoose = require('mongoose');
const http = require('http');
const bodyParser = require('body-parser');

const Text = require('./models/text');
const Block = require('./models/block');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //uri that may access resources from my api
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});




mongoose.connect('mongodb://innowacja:innowacja1@ds161520.mlab.com:61520/innowacjadb');
mongoose.Promise = global.Promise;

app.get('/', (req, res, next) => {
    res.status(200).json({
        text: 'Witam w backendzie projektu Innowacja :)'
    });
});

app.post('/blocks', (req, res, next) => {
    let blockContent = req.body.content;
    if(blockContent.length < 1){
        return res.status(400).json({
            message: 'Block content shouldnt be empty!'
        });
    }
    
    Block.find({
        content: blockContent
    })
    .exec()
    .then(block => {
        // if (block.length >= 1) {
        //     return res.status(409).json({
        //         message: 'Block with such content already exists'
        //     });
        // } else {
            const newBlock = new Block({
                _id: new mongoose.Types.ObjectId(),
                content: blockContent,
                timestamp: Date.now()
            });
            newBlock.save()
            .then(result => {
                return res.status(201).json({
                    block: result
                });
            })
            .catch(err => {
                console.log(err);
                return res.status(500).json({
                    error: err
                });
            });
        //}
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
});

app.get('/blocks', (req, res, next) => {
    Block.find({})
    .exec()
    .then(result => {
        return res.status(200).json({
            blocks: result
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});

app.get('/texts/:part', (req, res, next) => {
    let part = req.params.part;
    Text.find({part: part})
    .exec()
    .then(result => {
        return res.status(200).json({
            content: result
        });
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
});




app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server started!');
});