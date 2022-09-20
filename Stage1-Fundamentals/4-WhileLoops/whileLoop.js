// Import Assertion
var assert = require('../../assert.js')

function whileLoopExample(n) {
    i = 0
    while (i < n)
    {
        console.log(i)
        i = i + 1 // Alternative can use i += 1 or i++
    }
}

whileLoopExample(10)
//assert()
