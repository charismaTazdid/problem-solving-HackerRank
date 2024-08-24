// Probelm : https://leetcode.com/problems/maximize-distance-to-closest-person/

 var maxDistToClosest = module.exports = function(seats) {

    let maxLength = 0,
    count = 0,
    N = seats.length;
    
    for (i of seats) {
        
        if (i == 0) count++;
        if (i == 1) count = 0;

        maxLength = Math.max((count + 1) / 2, maxLength);
    }

    for (let i = 0; i < N; i++)  
        if (seats[i] == 1) {
            maxLength = Math.max(maxLength, i);
            break;
        }

    for (let i = N - 1; i >= 0; i--)  
        if (seats[i] == 1) {
            maxLength = Math.max(maxLength, N - 1 - i);
            break;
        }
   
    return  Math.round(maxLength) > maxLength 
            ? 
            Math.round(maxLength)-1 
            : 
            Math.round(maxLength);
    
};