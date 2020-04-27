/*
Create a function that takes a number and return an array of three numbers:
half of the number, quarter of the number and an eighth of the number.


halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
*/


const halfQuarterEighth = (n) => {
    return [n / 2, n / 4, n / 8];
}
