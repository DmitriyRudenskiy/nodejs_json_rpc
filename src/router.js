module.exports = function(router) {
    router.use("/user/:id", function (req, res, next) {
        if (req.params.id == 0) {
            res.json({"message": "You must pass ID other than 0"});
        }
        else next();
    });

    router.use('/ping', function (req, res) {
        var response = require('./response/result');

        res.json(response.init(1, 'pong'));
    });

    router.use('/dogs', function (req, res) {
        res.json({test: 'pong'});
    });

    return router;
};