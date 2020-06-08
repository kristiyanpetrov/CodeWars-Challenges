/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names,
which should be separated by an ampersand.

Example:
*/

list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}]);
// returns 'Bart, Lisa & Maggie'

list([{name: 'Bart'}, {name: 'Lisa'}]);
// returns 'Bart & Lisa'

list([{name: 'Bart'}]);
// returns 'Bart'

list([]);

// returns ''

function list(names) {
    let str = '';

    if (names.length !== 0) {
        // remove last name from the array and assign it to 'last' variable
        let last = names.pop();
        str = names.map((val, i, arr) => {
            if (i !== arr[arr.length - 1]) {
                return val.name;
            }
        }).join(', ');
        // if 'str' var isn't equal on empty str, then assign '& last.name' in 'str'
        str += str !== '' ? ' & ' + last.name : last.name;
    }
    return str;

}
