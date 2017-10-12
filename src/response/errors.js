var PARSE_ERROR = -32700;
var INVALID_REQUEST = -32600;
var METHOD_NOT_FOUND = -32601;
var INVALID_PARAMS = -32602;
var INTERNAL_ERROR = -32603;

var ERRORS = {
    "-32700": {
        message: "Parse error",
        text: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
    },
    "-32600": {
        message: "Invalid Request",
        text: "The JSON sent is not a valid Request object."
    },
    "-32601": {
        message: "Method not found",
        text: "The method does not exist / is not available."
    },
    "-32602": {
        message: "Invalid params",
        text: "Invalid method parameter(s)."
    },
    "-32603": {
        message: "Internal error",
        text: "Internal JSON-RPC error."
    }
};

module.exports.InvalidParamsError = InvalidParamsError;
module.exports.MethodNotFoundError = MethodNotFoundError;