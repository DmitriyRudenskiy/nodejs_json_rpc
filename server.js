var config = require('config');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();


router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    //app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//парсинг application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send({"Error": err.stack});
});

// Router middleware, mentioned it before defining routes.
router.use("/user/:id", function (req, res, next) {
    if (req.params.id == 0) {
        res.json({"message": "You must pass ID other than 0"});
    }
    else next();
});

app.get('/ping', function (req, res) {
    res.send('pong');
});

app.post('/dogs', function (req, res) {
    res.json({test: 'pong'});
});

// Handle 404 error.
// The last middleware.
app.use("*",function(req,res){
    res.status(404).json({"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"});
});

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/api",router);

app.listen(5001, function () {
    console.log("Express is running on port 5001");
});