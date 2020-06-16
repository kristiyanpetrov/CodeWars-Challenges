/*
Complete the solution so that
the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

solution('camelCasing');
solution('camelCasingTest');

function solution(string) {
    return console.log(string.replace(/([a-z])([A-Z])/g, '$1 $2'));
}
