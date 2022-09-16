function solution(A) {
    let sequenced = false;
    let count = 0;  //how many way to cut out one tree

    // Checking if the array allready follow the aesthetic sequence
    for (i = 0; i < A.length; i++) {
        let currentNumber = A[i];
        let secondNumber = A[i + 1];
        let thirdNumber = A[i + 2];

        if (currentNumber < secondNumber && thirdNumber !== undefined) {
            if (secondNumber > thirdNumber) {
                sequenced = true;
            } else { sequenced = false; break }
        };
        if (currentNumber > secondNumber && thirdNumber !== undefined) {
            if (secondNumber < thirdNumber) {
                sequenced = true;
            } else { sequenced = false; break }
        };
    };

    // if 'sequenced' is false, we should check how many way there to make the array aesthetic sequence...
    if (sequenced === false) {
        let new_array_isSequenced = false;

        for (let i = 0; i < A.length; i++) {
            const newArray = A.filter((num, index) => index !== i);
            // after remove one tree, check is the newArray follow the aesthetic sequence
            for (let i = 0; i < newArray.length; i++) {
                let currentNumber = newArray[i];
                let secondNumber = newArray[i + 1];
                let thirdNumber = newArray[i + 2];

                if (currentNumber < secondNumber && thirdNumber !== undefined) {
                    if (secondNumber > thirdNumber) {
                        new_array_isSequenced = true;
                    } else { new_array_isSequenced = false; break }
                };
                if (currentNumber > secondNumber && thirdNumber !== undefined) {
                    if (secondNumber < thirdNumber) {
                        new_array_isSequenced = true;
                    } else { new_array_isSequenced = false; break }
                };
            };

            if (new_array_isSequenced) {
                count = count + 1;
            }
        };

    };
    //finally returning
    if (sequenced) {
        return 0;
    }
    if (!sequenced && count === 0) {
        return -1;
    }
    else {
        return count
    }

};


const A = [3, 4, 5, 3, 7]
const B = [1, 2, 3, 4]
const C = [1, 3, 1, 2]


console.log(solution(A))//3
console.log(solution(B))// -1
console.log(solution(C))// 0



