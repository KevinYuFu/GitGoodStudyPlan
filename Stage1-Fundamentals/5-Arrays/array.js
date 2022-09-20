// Import Assertion
var assert = require('../../assert.js')

function iterateThroughArray(arr)
{
    for (i = 0; i < arr.length; ++i)
    {
        console.log(arr[i])
    }

    arr.forEach((x, i) => console.log(x))

    for (const x of arr)
    {
        console.log(x)
    }
}

function alterArray(arr)
{
    for (i = 0; i < arr.length; ++i)
    {
        arr[i] += 10
    }
}


iterateThroughArray(["apple", "banana", "Cherry"])

const nums = [1, 2, 3, 4, 5]
alterArray(nums)
iterateThroughArray( nums )
//assert()
