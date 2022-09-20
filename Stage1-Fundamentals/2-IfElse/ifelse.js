
// Import Assertion
var assert = require('../../assert.js')

function isEven(x) {
    return x % 2 == 0
}

assert(isEven(5), false)
assert(isEven(4), true)
assert(isEven(0), true)
