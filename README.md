# Varian 1
HDR='Content-type: application/json'
MSG='{"jsonrpc": "2.0", "method": "speak", "id": 1}'
curl -H $HDR -d $MSG http://localhost:5000/cats

# Variant 2
curl -H 'Content-type: application/json' -d '{"jsonrpc": "2.0", "method": "speak", "id": 1}' http://127.0.0.1:5001/dogs

Run the tests:
==============

npm test