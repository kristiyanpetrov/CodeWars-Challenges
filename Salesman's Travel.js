/*
A traveling salesman has to visit clients. He got each client's address e.g.
"432 Main Long Road St. Louisville OH 43071" as a list.

The basic zipcode format usually consists of two capital letters followed by a white space and five digits.
The list of clients to visit was given as a string of all addresses,
 each separated from the others by a comma, e.g. :

"123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432".

To ease his travel he wants to group the list by zipcode.

Task:
The function travel will take two parameters r
(addresses' list of all clients' as a string) and zipcode and returns a string in the following format:

zipcode:street and town,street and town,.../house number,house number,...

The street numbers must be in the same order as the streets where they belong.

If a given zipcode doesn't exist in the list of clients' addresses return "zipcode:/"

Examples:
r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "NY 5643") --> "NY 5643:/"
*/

function travel(r, zipcode) {
    const list = r.split(",")
        .map((x) => {
            // ^\d+ match a digits at the beginning
            // [a-zA-z.\s]+ match a single upper or lower-case letter and or ending with dot and separated by space
            // [A-Z]{2} \d+)$/ match only two capital letters separated by space with one or more numbers at the end
            const addr = x.match(/(^\d+) ([a-zA-z.\s]+) ([A-Z]{2} \d+)$/);
            return {
                houseNumber: addr[1],
                streetName: addr[2],
                zip: addr[3],
            };
        });

    let street = [];
    let house = [];
    /* if our array position for r.zip is correct and equal to zipcode,
    we push to new separated array the street name and house num */
    list.forEach((r) => {
        if (r.zip === zipcode) {
            street.push(r.streetName);
            house.push(r.houseNumber);
        }
    });

    // return format 'AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670'
    return `${zipcode}:${street.join(',')}/${house.join(',')}`;
}
