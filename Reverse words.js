/*
Complete the function that accepts a string parameter,
and reverses each word in the string.
All spaces in the string should be retained.

Example:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

reverseWords('The quick brown fox jumps over the lazy dog.');
reverseWords('apple');
reverseWords('a b c d');
reverseWords('double  spaced  words');

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
