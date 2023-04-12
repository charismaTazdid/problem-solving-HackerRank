// Problem: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true


function catAndMouse(x, y, z) {
    const cat_A_move = Math.abs(z - x);
    const cat_B_move = Math.abs(z - y);

    let result = "";

    if (cat_A_move < cat_B_move) {
        return result = "Cat A";
    }
    else if (cat_B_move < cat_A_move) {
        return result = "Cat B";

    }
    else {
        return result = "Mouse C";
    }
    console.log(result)

};

// Done