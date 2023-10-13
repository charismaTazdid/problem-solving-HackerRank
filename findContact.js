
/*** 
    When you open the dialer of your phone and start typing a number, you will probably get search result from the saved contacts for the number you entered.  Your task is to implement a similar feature.
    Write a function, whice Given two arrays 'A' and 'B' and a string 'P' or length M representing a partial phone number, returns the contact name whose phone number contain P as a substring, that is a contiguious segement (for example: '435667678' contain as a substring '767', but not '478').
    If there is more than one contact matching the search criteria, your function should return the alphabetically smallest contact name.
    If no match is found, your function should return "NO CONTACT"
 */

    // A problem from codelity contest.

function solution(A, B, P) {
    let foundContact = [];
    let result = '';

    B.map(num => {
        let matchd = num.match(P);

        if (matchd != null) {
            let numIndex = B.indexOf(num);
            let contactName = A[numIndex]
            foundContact.push(contactName)
        }
        return;
    })

    if (foundContact.length) {
        result = foundContact.reduce((a, b) => a.length <= b.length ? a : b);
    } else {
        result = 'NO CONTACT'
    }

    return result;
};

const contactName = ['nafisa', 'lisaaaaa', 'oishe'];
const contactNumber = ['233', '56234', '5776'];
console.log(solution(contactName, contactNumber, '3'))