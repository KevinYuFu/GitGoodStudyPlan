
// Import Assertion
var assert = require('../../assert.js')

function sum(a, b) {
    return a + b
}

assert(sum(1, 2), 3)
assert(sum(-1, 2), 1)
assert(sum(-7, 4), -3)
