function solution(B) {
    
    const part = '#';  //part of ship
    let totalParts = 0;

    let submarine = 0;
    let destroyer = 0;

    for (let i = 0; i < B.length; i++) {
        let currentRow = B[i];
        let secondRow = B[i + 1];
        let thirdRow = B[i + 2];
        let fourthRow = B[i + 3];
        let previousRow = B[i - 1];

        for (let j = 0; j < currentRow.length; j++) {
            let currentChar = currentRow[j];
            let secondChar = currentRow[j + 1];
            let thirdChar = currentRow[j + 2];
            let fourthChar = currentRow[j + 3];

            if (currentChar === part) {
                totalParts = totalParts + 1;

                //action to find Destroyers
                if (secondChar === part && thirdChar === part && fourthChar !== part) {
                    destroyer = destroyer + 1;
                }
                else if ((secondRow && thirdRow) && secondRow[j] === part && thirdRow[j] === part) {
                    if(fourthRow === undefined){
                        destroyer = destroyer + 1;
                    }
                    if (fourthRow && fourthRow[j] !== part) {
                        destroyer = destroyer + 1;
                    }
                }
                else if ((secondRow) && secondChar === part && secondRow[j] === part) {
                    destroyer = destroyer + 1;
                }
                else if ((secondRow) && secondChar === part && secondRow[j + 1] === part) {
                    destroyer = destroyer + 1;
                }
                else if ((secondRow) && secondRow[j] === part && secondRow[j + 1] === part) {
                    destroyer = destroyer + 1;
                }
                else if ((secondRow) && secondRow[j] === part && secondRow[j - 1] === part) {
                    destroyer = destroyer + 1;
                }

                //Action to Find Submarines
                else if (secondChar === part && thirdChar !== part) {
                    if ((secondRow && previousRow) && previousRow[j] !== part && previousRow[j + 1] !== part && secondRow[j] !== part && secondRow[j + 1] !== part && currentRow[j - 1] !== part) {
                        //submarine found
                        submarine = submarine + 1;
                    };
                    if ((secondRow) && previousRow === undefined && secondRow[j] !== part && secondRow[j + 1] !== part && currentRow[j - 1] !== part) {
                       //submarine found
                        submarine = submarine + 1;
                    }

                    if ((previousRow) && secondRow === undefined && previousRow[j] !== part && previousRow[j + 1] !== part && currentRow[j - 1] !== part) {
                       //submarine found
                        submarine = submarine + 1;
                    }

                    if (secondRow === undefined && previousRow === undefined && currentRow[j - 1] !== part) {
                       //submarine found
                        submarine = submarine + 1;
                    }

                }


                //finding column wise submarine
                else if ((secondRow) && secondRow[j] === part) {

                    if ((thirdRow && previousRow) && thirdRow[j] !== part && secondRow[j - 1] !== part && secondRow[j + 1] !== part && currentRow[j - 1] !== part && currentRow[j + 1] !== part && previousRow[j] !== part) {
                        //submarine found
                        submarine = submarine + 1;
                    }

                    if ((thirdRow) && previousRow === undefined && thirdRow[j] !== part && secondRow[j - 1] !== part && secondRow[j + 1] !== part && currentRow[j - 1] !== part && currentRow[j + 1] !== part) {
                        //submarine found
                        submarine = submarine + 1;
                    }

                    if ((previousRow) && thirdRow === undefined && secondRow[j - 1] !== part && secondRow[j + 1] !== part && currentRow[j + 1] !== part && currentRow[j - 1] && previousRow[j] !== part) {
                        //submarine found
                        submarine = submarine + 1;
                    }
                    if (thirdRow === undefined && previousRow === undefined && secondRow[j - 1] !== part && secondRow[j + 1] !== part && currentRow[j + 1] !== part && currentRow[j - 1] !== part) {
                        //submarine found
                        submarine = submarine + 1;
                    }
                }
            };


        }; //inner for loop end

    }; //outer for loop end

    let patrolBoat = totalParts - (destroyer * 3) - (submarine * 2);

    const R = [patrolBoat, submarine, destroyer];

    return R;
};


const A = ['.##.#', '#.#..', '#...#', '#.##.'];   // expected result => pat: 2, Sub: 1, Dest: 2;
const B = ['.#..#', '##..#', '...#.'];   // expected result => pat: 1, Sub: 1, Dest: 1;
const C = ['##.', '#.#', '.##']   // expected result => pat: 0, Sub: 0, Dest: 2;
const D = ['...', '...', '...']   // expected result => pat: 0, Sub: 0, Dest: 0;
const E = ['##.#', '.#.#']   // expected result => pat: 0, Sub: 1, Dest: 1;
const F = ['.###.#', '.#...#', '#.#...', '..##.#'] // expected result => pat: 3, Sub: 1, Dest: 2;
const G = ['.###.#', '##...#', '#.#...', '..##.#'] // expected result => pat: 1, Sub: 1, Dest: 3;
const H = ['#.#', '#.#', '#..', '..#'] // expected result => pat: 1, Sub: 1, Dest: 1;

const testResult = solution(A);
// const testResult = solution(B);
// const testResult = solution(C);
// const testResult = solution(D);
// const testResult = solution(E);
// const testResult = solution(F);
// const testResult = solution(G);
// const testResult = solution(H);
console.log(testResult)


