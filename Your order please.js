/*
Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.
    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.

Examples:
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

order("4of Fo1r pe6ople 8ne g3ood zashto9 th5e the2 da7");
order("is2 Thi1s T4est 3a");

function order(words) {
    /*
    .split(' ') - create array where every word become in a string
    .sort() - sort by numeric every word
    .match(/\d/) - using metacharacter "/\d/" to find a digits from 0-9 and order from 0-9 the words
    .join(' ') - remove array and with space between single quotes separator,
    we say to separate every word with space
    */
    const test = words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
    console.log(test);
}
