var successfulResponse = {
    "jsonrpc": '2.0',
    "result": null,
    "id": null
};

successfulResponse.setId = function(id) {
    this.id = id * 1;
};

successfulResponse.setResult = function(result) {
    this.result = result;
};

successfulResponse.init = function(id, result) {
    this.id = id * 1;
    this.result = result;

    return this;
};

module.exports = successfulResponse;