var multer  = require('multer');
var ImageControllers = {};

ImageControllers.upload = function() {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/tmp/my-uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });

    var upload = multer({ storage: storage });
};

module.exports = ImageControllers;