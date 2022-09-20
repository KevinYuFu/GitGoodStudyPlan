
function assert(input, expected, success_text='Passed', failed_text='Failed')
{
    if (input == expected) {
        console.log(success_text)
    } else {
        console.log(failed_text)
    }
}

module.exports = assert
