var config = require('config');
var express = require('express');
var bodyParser = require('body-parser');

// Parser arg
var argv = require('minimist')(process.argv.slice(2));
var env = (argv.env == 'production') ? 'production' : 'development';

// Configuration
var app = express();

app.set('port', argv.port * 1 || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send({"Error": err.stack});
});

app.use(function (req, res, next) {
    // Configure CORS (Cross-Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

// development only
if ('development' == env) {
    // app.use(express.errorHandler());
}

// app.post('*', requireAuthentication);
// app.post('*', loadUser);
app.use("/api", require('./router')(express.Router()));

// Not find
app.use("*", function (req, res) {
    res.status(404).json({"jsonrpc": "2.0", "error": {"code": -32601, "message": "Method not found"}, "id": "1"});
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports.app = app;